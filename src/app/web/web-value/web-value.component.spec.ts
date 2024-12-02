import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebValueComponent } from './web-value.component';

describe('WebValueComponent', () => {
  let component: WebValueComponent;
  let fixture: ComponentFixture<WebValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
