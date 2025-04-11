import { Component, effect, model, output } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormRecord, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounce, debounceTime, distinctUntilChanged, take } from 'rxjs';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ValuedAxis } from '@cawado/web-chart';

@Component({
    selector: 'lasr-input-form',
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule],
    templateUrl: './input-form.component.html',
    styleUrl: './input-form.component.scss'
})
export class InputFormComponent {
    axes = model.required<ValuedAxis[]>();
    filled = output<{current: boolean, expected: boolean, difference: boolean}>();

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

const buildRiskForm = (risk: ValuedAxis): FormGroup => new FormGroup({
    label: new FormControl(risk.label),
    expected: new FormControl(risk.expected),
    current: new FormControl(risk.current),
})