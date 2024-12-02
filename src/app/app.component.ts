import { Component } from '@angular/core';
import { Risk } from './model';
import { WebComponent } from './web/web.component';
import { InputFormComponent } from './input-form/input-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WebComponent, InputFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    risks5: Risk[] = [
        {label: 'Risiko 1',expected: 80, current: 52, active: true, endPoint: {x:0,y:0},color: 'black'}, 
        {label: 'Risiko 2',expected: 75, current: 70, active: true, endPoint: {x:0,y:0},color: 'black'}, 
        {label: 'Risiko 3',expected: 65, current: 25, active: true, endPoint: {x:0,y:0},color: 'black'}, 
        {label: 'Risiko 4',expected: 30, current: 30, active: true, endPoint: {x:0,y:0},color: 'black'}, 
        {label: 'Risiko 5',expected: 50, current: 45, active: true, endPoint: {x:0,y:0},color: 'black'}, 
      ];
}
