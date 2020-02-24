import {
  Component, OnDestroy,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

// rxjs
import {Observable, Subscription} from 'rxjs';
import {map, mergeMap, switchMap} from 'rxjs/operators';

// api
import {PeopleService} from 'app/commons/api/people';
import {Human, Planet} from 'app/commons/api/people/types';

// api
import {DetailService} from 'app/commons/api/detail';

// types
import {Link, Node} from '../detail-chart/d3';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  params: Observable<any> = null;
  isShowSpinner = true;

  person: Human = null;
  residents: Array<Human> = [];
  planetInfo: Planet = null;


  // for charts
  nodes = [];
  link = [];

  dataSubscription: Subscription;

  constructor(public router: Router,
              public detailService: DetailService,
              activatedRoute: ActivatedRoute,
              public peopleService: PeopleService) {

    this.params = activatedRoute.params;
  }


  ngOnInit() {
    this.detailService.getPlanetInfo('planet');

    this.dataSubscription = this.params
      .pipe(
        switchMap((value) => {
          return this.peopleService.getPerson(decodeURI(value.id));
        }),
        mergeMap((event1: Human) => {
          return this.peopleService.getPeopleByPlanet(event1.homeworld)
            .pipe(
              map(event2 => {
                return {
                  currentPerson: event1,
                  otherPersons: event2
                };
              })
            );
        }),
        mergeMap((event1) => {
          return this.detailService.getPlanetInfo(event1.currentPerson.homeworld)
            .pipe(
              map((event2) => {
                return {...event1, ...{planet: event2}};
              })
            );
        })
      )
      .subscribe({
        next: (data) => {
          this.isShowSpinner = false;

          if (!data.otherPersons || !data.currentPerson) {
            return;
          }

          this.residents = data.otherPersons;
          this.person = data.currentPerson;
          this.planetInfo = data.planet;

          const {links, nodes} = this.convertPersonsToChart(data.otherPersons, data.currentPerson);

          this.nodes = nodes;
          this.link = links;
        },
        error: (err) => {
          this.isShowSpinner = false;
          console.error('error', err);
          this.router.navigate(['404']);
        }
      });
  }

  convertPersonsToChart(data: Array<Human>, currentPerson: Human): {
    nodes: Node[],
    links: Link[]
  } {

    const nodes: Node[] = [];
    const links: Link[] = [];
    const N = data.length;


    let currentIndex = -1;

    data.forEach(((item, i) => {
      nodes.push(new Node(i, item.name));
      if (item.name === currentPerson.name) {
        currentIndex = i;
      }
    }));


    for (let i = 1; i < N; i++) {
      /** increasing connections toll on connecting nodes */
      links.push(new Link(nodes[i], nodes[i]));
    }

    /** connecting the nodes before starting the simulation */

    nodes[currentIndex].linkCount = 20;

    return {
      nodes, links
    };
  }

  onSelectChartItem(event: Node) {
    if (event) {
      const url = 'detail/' + encodeURI(event.name);
      // this.router.navigate([url]);
    }
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
