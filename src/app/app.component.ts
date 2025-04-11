import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { WebChartComponent, WebHighlights } from '@cawado/web-chart';
import { InputFormComponent } from './input-form/input-form.component';
import { QUALITY_GOALS, Risk } from './model';

@Component({
    selector: 'app-root',
    imports: [WebChartComponent, InputFormComponent, MatCardModule, MatButtonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    filled = signal<WebHighlights>({
        current: false,
        expected: false,
        difference: true
    });

    risks5 = signal<Risk[]>([
        {label: QUALITY_GOALS[0],goal: randomPercent({min: 50}), lasrPoints: randomPercent({max: 50}), active: true}, 
        {label: QUALITY_GOALS[1],goal: randomPercent({min: 50}), lasrPoints: randomPercent({max: 50}), active: true}, 
        {label: QUALITY_GOALS[2],goal: randomPercent({min: 50}), lasrPoints: randomPercent({max: 50}), active: true}, 
        {label: QUALITY_GOALS[3],goal: randomPercent({min: 50}), lasrPoints: randomPercent({max: 50}), active: true}, 
        {label: QUALITY_GOALS[4],goal: randomPercent({min: 50}), lasrPoints: randomPercent({max: 50}), active: true}, 
      ]);
    webAxes = computed(() => riskTransform(this.risks5()));
}
type RandomInput = {min: number, max: number}; 
function randomPercent(input: Partial<RandomInput> = {}){  
    const {max,min}: RandomInput = {...{min: 0, max: 100}, ...input}; 
    return Math.ceil(
        Math.random() * (max - min) + min
    );  
} 

export function riskTransform(risks: Risk[]): Required<Omit<Risk,'color' | 'endPoint'>>[] {
    return risks.map(risk =>({
        ...risk,
        expected: risk.goal,
        current: risk.goal - risk.lasrPoints * (risk.goal / 100)
    }))
} 