import {
  Component,
  Input
} from '@angular/core';

// models
import {Link} from '../../../d3';

@Component({
  /* tslint:disable-next-line */
  selector: '[linkVisual]',
  template: `
      <svg:line
              class="link"
              [attr.x1]="link?.source?.x"
              [attr.y1]="link?.source?.y"
      ></svg:line>
  `,
  styleUrls: ['./link-visual.component.css']
})
export class LinkVisualComponent {
  /* tslint:disable-next-line */
  @Input('linkVisual') link: Link;
}
