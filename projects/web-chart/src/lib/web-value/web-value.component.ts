import { Component, computed, input } from '@angular/core';
import { Point } from '../web-chart.model';
import { DEFAULT_STYLE_OPTIONS } from '../web-chart.default';
import { optionsStyleTransform } from '../web-chart.functions';


@Component({
    selector: 'lasr-web-value, g[webValue]',
    imports: [],
    template: `
    @for (point of webValue(); track $index) {
        <svg:circle [attr.cx]="point.x" [attr.cy]="point.y" [attr.r]="options().pointWidth" [attr.fill]="options().pointColor" />
    }
    <svg:polygon [attr.points]="valuePolygon()"
        [attr.stroke-width]="options().lineWidth"
        [attr.stroke]="options().lineColor"
        [attr.stroke-opacity]="options().lineOpacity"
        [attr.fill]="valueFillColor()"
        [attr.fill-opacity]="valueFillOpacity()" />
    `,
    styles: []
})
export class WebValueComponent {
    webValue = input<Point[]>([]);
    valuePolygon = input<string>();
    options = input(DEFAULT_STYLE_OPTIONS,{transform:optionsStyleTransform})
    filled = input(false); 

    valueFillColor = computed(() => this.filled() ? this.options().lineColor : 'transparent');
    valueFillOpacity = computed(() => this.filled() ? this.options().lineOpacity : 'transparent');
}