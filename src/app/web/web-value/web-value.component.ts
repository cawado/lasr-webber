import { Component, computed, input } from '@angular/core';
import { optionsStyleTransform } from '../web.functions';
import { Point } from '../web.model';
import { DEFAULT_STYLE_OPTIONS } from '../web.default';


@Component({
  selector: 'lasr-web-value, g[webValue]',
  standalone: true,
  imports: [],
  template: `
    @for (point of webValue(); track $index) {
        <svg:circle [attr.cx]="point.x" [attr.cy]="point.y" [attr.r]="options().pointWidth" [attr.fill]="options().pointColor" />
    }
    <svg:polygon [attr.points]="valuePolygon()"
        [attr.stroke-width]="options().lineWidth"
        [attr.stroke]="options().lineColor"
        [attr.stroke-opacity]="options().lineOpacity"
        [attr.fill]="valueFillColor()" />
    `,
  styles: []
})
export class WebValueComponent {
    webValue = input<Point[]>([]);
    valuePolygon = input<string>();
    options = input(DEFAULT_STYLE_OPTIONS,{transform:optionsStyleTransform})
    filled = input(false); 

    valueFillColor = computed(() => this.filled() ? this.options().lineColor : 'transparent');
}