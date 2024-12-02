import { Component, input, signal } from '@angular/core';
import { Risk } from './model';
import { WebChartComponent } from '../../projects/web-chart/src/lib/web-chart.component';
import { InputFormComponent } from './input-form/input-form.component';
import { MatCardModule } from '@angular/material/card';
import { WebHighlights } from '../../projects/web-chart/src/lib/web-chart.model';


@Component({
    selector: 'app-root',
    imports: [WebChartComponent, InputFormComponent, MatCardModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    filled = signal<WebHighlights>({
        current: false,
        expected: false,
        difference: true
    });

    risks5: Risk[] = [
        {label: 'Risiko 1',expected: 80, current: 52, active: true}, 
        {label: 'Risiko 2',expected: 75, current: 70, active: true}, 
        {label: 'Risiko 3',expected: 65, current: 25, active: true}, 
        {label: 'Risiko 4',expected: 30, current: 30, active: true}, 
        {label: 'Risiko 5',expected: 50, current: 45, active: true}, 
      ];
}
