import { Component, effect, model } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormRecord, ReactiveFormsModule } from '@angular/forms';
import { Risk } from '../model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounce, debounceTime } from 'rxjs';

@Component({
    selector: 'lasr-input-form',
    imports: [ReactiveFormsModule],
    templateUrl: './input-form.component.html',
    styleUrl: './input-form.component.scss'
})
export class InputFormComponent {
    axes = model.required<Risk[]>();

    riskForms = new FormArray<FormGroup>([]); 
    
    constructor() {
        effect(() => {
            this.riskForms.clear();
            this.axes().map(buildRiskForm).forEach(rf => this.riskForms.push(rf));
        });

        this.riskForms.valueChanges.pipe(
            takeUntilDestroyed(), debounceTime(500)
        ).subscribe(values => this.axes.set(values))
    }
}

const buildRiskForm = (risk: Risk): FormGroup => new FormGroup({
    label: new FormControl(risk.label),
    expected: new FormControl(risk.expected),
    current: new FormControl(risk.current),
})