import { Component, computed, input, signal } from '@angular/core';
import { WebAxesComponent } from './web-axes/web-axes.component';
import { WebValueComponent } from './web-value/web-value.component';
import { AllStyleOptionInputType, Point } from './web-chart.model';
import { Risk } from '../../../../src/app/model';
import { WebValueDifferenceComponent } from './web-value-differenz/web-value-difference.component';
import { DEFAULT_AXIS_CONFIG_OPTIONS } from './web-chart.default';
import { pointOnCycle } from './web-chart.functions';

@Component({
    selector: 'cawado-web-chart',
    imports: [WebAxesComponent, WebValueComponent, WebValueDifferenceComponent],
    templateUrl: './web-chart.component.html',
    styleUrl: './web-chart.component.scss'
})
export class WebChartComponent {

    readonly center: Point = DEFAULT_AXIS_CONFIG_OPTIONS.center; 

    axes = input.required<Risk[]>(); 
    startDegree = input(270); 
    max = input(100); 
    numberOfWebLines = input(5); 
    styles = input<AllStyleOptionInputType>({
        web:     { color: 'currentColor'},
        current: { color: 'blue'},
        expected:{ color: 'green'},
        difference: { color: 'red', lineWidth: 4, lineOpacity: 1},
    });

    steps = computed(() => Array.from({length: this.numberOfWebLines()}).map((_,index) => (this.max() / this.numberOfWebLines() * (index +1)))); 

    degreePerAxis = signal(360); 
    filled = input<any>({});

    currentValues = computed(() => {
        const dpa = this.degreePerAxis(); 
        const points = this.axes().map((axis, axisIndex) => pointOnCycle(
                this.startDegree() + (dpa * axisIndex),
                this.center, axis.current
        )); 
        const polygon = points
            .map(p => `${p.x},${p.y}`)
            .join(' ')
        return {points, polygon}
    })

    expectedValues = computed(() => {
        const dpa = this.degreePerAxis(); 
        const points = this.axes().map((axis, axisIndex) => pointOnCycle(
                this.startDegree() + (dpa * axisIndex),
                this.center, axis.expected
        )); 
        const polygon = points
            .map(p => `${p.x},${p.y}`)
            .join(' ')
        return {points, polygon}
    })

    difference = computed(() => {
        const current = this.currentValues().points; 
        const expected = this.expectedValues().points; 
        return current.map((start, i) => ({start, end: expected[i]}) )
    })
}
