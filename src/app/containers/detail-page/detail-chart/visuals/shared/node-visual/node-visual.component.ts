import {Component, Input} from '@angular/core';
import {D3Service, Node} from '../../../d3';

@Component({
  /* tslint:disable-next-line */
  selector: '[nodeVisual]',
  template: `
      <svg:g (click)="onChooseItem()" [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
          <svg:circle
                  class="node"
                  [attr.fill]="node.color"
                  cx="0"
                  cy="0"
                  [attr.r]="node.r">
          </svg:circle>
          <svg:text
                  class="node-name"
                  [attr.font-size]="node.fontSize">
              {{node.name}}
          </svg:text>
      </svg:g>
  `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  /* tslint:disable-next-line */
  @Input('nodeVisual') node: Node;

  constructor(public d3Service: D3Service) {
  }

  onChooseItem() {
    this.d3Service.onChooseItem(this.node);
  }
}
