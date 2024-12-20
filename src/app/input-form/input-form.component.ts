import { Component, effect, model, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { QUALITY_GOALS, Risk, RiskForm } from '../model';

@Component({
    selector: 'lasr-input-form',
    imports: [ReactiveFormsModule, MatFormFieldModule, 
        MatInputModule, MatSlideToggleModule, MatSelectModule],
    templateUrl: './input-form.component.html',
    styleUrl: './input-form.component.scss'
})
export class InputFormComponent {
    axes = model.required<Risk[]>();
    filled = output<{current: boolean, expected: boolean, difference: boolean}>();

    get goals() { return QUALITY_GOALS;} 

    riskForms = new FormArray<FormGroup>([]); 
    fillForm = new FormGroup({
        current: new FormControl(false,{nonNullable: true}),
        expected: new FormControl(false,{nonNullable: true}),
        difference: new FormControl(true,{nonNullable: true})
    });
    
    constructor() {
        effect(() => {
            this.riskForms.clear();
            this.axes().map(buildRiskForm).forEach(rf => this.riskForms.push(rf));
        });

        this.riskForms.valueChanges.pipe(
            takeUntilDestroyed(), debounceTime(500), distinctUntilChanged((a,b) => JSON.stringify(a) === JSON.stringify(b) )
        ).subscribe(values => {
            this.axes.set(values);
        })

        this.fillForm.valueChanges.pipe(takeUntilDestroyed()).subscribe(values => this.filled.emit({...this.fillForm.getRawValue() ,...values}))
    }
}

const buildRiskForm = (risk: Risk): FormGroup => new FormGroup<RiskForm>({
    label: new FormControl(risk.label,{nonNullable: true}),
    goal: new FormControl(risk.goal,{nonNullable: true}),
    lasrPoints: new FormControl(risk.lasrPoints,{nonNullable: true}),
    active: new FormControl(risk.active,{nonNullable: true}),
})