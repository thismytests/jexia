import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

// char
import {
  D3Service,
  Link,
  Node
} from '../d3';

@Component({
  selector: 'app-detail-chart',
  templateUrl: './detail-chart.component.html',
  styleUrls: ['./detail-chart.component.scss']
})
export class DetailChartComponent implements OnInit {
  @Input() nodes: Node[] = [];
  @Input() links: Link[] = [];

  @Output() selectNode: EventEmitter<Node> = new EventEmitter<Node>();

  constructor(public d3Service: D3Service) {

  }

  ngOnInit(): void {
    this.d3Service.selectedNode.subscribe((data) => {
      this.selectNode.emit(data);
    });
  }

}
