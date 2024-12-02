import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebValueDifferenceComponent } from './web-value-difference.component';

describe('WebValueDifferenceComponent', () => {
  let component: WebValueDifferenceComponent;
  let fixture: ComponentFixture<WebValueDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebValueDifferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebValueDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
