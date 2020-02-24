import {
  Directive,
  Input,
  ElementRef,
  OnInit
} from '@angular/core';

// services
import {D3Service} from '../d3.service';

// models
import {
  Node,
  ForceDirectedGraph
} from '../models';


@Directive({
  /* tslint:disable-next-line */
  selector: '[draggableNode]'
})
export class DraggableDirective implements OnInit {
  /* tslint:disable-next-line */
  @Input('draggableNode') draggableNode: Node;
  /* tslint:disable-next-line */
  @Input('draggableInGraph') draggableInGraph: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private element: ElementRef) {
  }

  ngOnInit() {
    this.d3Service.applyDraggableBehaviour(
      this.element.nativeElement,
      this.draggableNode,
      this.draggableInGraph
    );
  }
}
