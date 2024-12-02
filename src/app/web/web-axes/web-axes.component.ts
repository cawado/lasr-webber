import { Component, computed, effect, input, model, untracked, } from '@angular/core';
import { axisStyleOptionsTransform, optionsTransform, pointOnCycle } from '../web.functions';
import { DEFAULT_AXIS_CONFIG_OPTIONS, DEFAULT_AXIS_STYLE_OPTIONS } from '../web.default';
import { Axis, WebAxisConfig, WebAxisStyleType, WebInputType } from '../web.model';

@Component({
  selector: 'lasr-web-axes, g[webAxes]',
  standalone: true,
  imports: [],
  templateUrl: './web-axes.component.html',
  styleUrl: './web-axes.component.scss'
})
export class WebAxesComponent {
    styles = input<WebAxisStyleType, WebInputType<WebAxisStyleType>>(DEFAULT_AXIS_STYLE_OPTIONS,{transform:axisStyleOptionsTransform});
    options = input<WebAxisConfig, WebInputType<WebAxisConfig>>(DEFAULT_AXIS_CONFIG_OPTIONS, {transform:optionsTransform(DEFAULT_AXIS_CONFIG_OPTIONS)});

    axes = input.required<Axis[]>({alias: 'webAxes'}); 
    degreePerAxis = model<number>(360); 

    webAxes = computed<Required<Axis>[]>(() => {
        const dpa = this.degreePerAxis(); 
        return this.axes().map((axis, axisIndex) => ({
        ...axis, 
        endPoint: pointOnCycle(
            this.options().startDegree + (dpa * axisIndex),
            this.options().center, this.options().max
        )
    }))
});

    webLines = computed(() => this.options().steps.map(step => 
            this.axes().map((_, axisIndex) => pointOnCycle(
                this.options().startDegree + (this.degreePerAxis() * axisIndex),
                this.options().center, step
            ))
            .map(p => `${p.x},${p.y}`)
            .join(' ')
        )
    );

    constructor() {
        effect(() => {
            this.degreePerAxis.set(360 / this.axes().length);
            untracked(() => {
            console.log("Setting",this.axes().length, this.degreePerAxis());
        })
        },{allowSignalWrites: true})
    }
}