import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebChartComponent } from './web-chart.component';

describe('WebComponent', () => {
  let component: WebChartComponent;
  let fixture: ComponentFixture<WebChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
