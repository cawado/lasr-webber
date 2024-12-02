import { Component, input } from '@angular/core';
import { DEFAULT_STYLE_OPTIONS } from '../web.default';
import { optionsStyleTransform } from '../web.functions';
import { Line } from '../web.model';

@Component({
    selector: 'lasr-web-value-difference, g[webDifferences]',
    imports: [],
    template: `
        @for (line of webDifferences(); track $index) {
        <svg:line 
        [attr.x1]="line.start.x" [attr.y1]="line.start.y" 
        [attr.x2]="line.end.x" [attr.y2]="line.end.y" 
        [attr.stroke]="options().lineColor"
        [attr.stroke-width]="options().lineWidth"
        [attr.stroke-opacity]="options().lineOpacity"
        />
    }
  `,
    styles: []
})
export class WebValueDifferenceComponent {
    options = input(DEFAULT_STYLE_OPTIONS,{transform:optionsStyleTransform})
    webDifferences = input.required<Line[]>();
}
