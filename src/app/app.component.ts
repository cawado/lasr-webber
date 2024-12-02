import { Component, input, signal } from '@angular/core';
import { Risk } from './model';
import { WebComponent } from './web/web.component';
import { InputFormComponent } from './input-form/input-form.component';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';
import { WebHighlights } from './web/web.model';


@Component({
    selector: 'app-root',
    imports: [WebComponent, InputFormComponent, MatCardModule],
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
