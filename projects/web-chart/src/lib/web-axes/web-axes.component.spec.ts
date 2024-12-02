import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAxesComponent } from './web-axes.component';

describe('WebAxesComponent', () => {
  let component: WebAxesComponent;
  let fixture: ComponentFixture<WebAxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebAxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
