import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBillingMethodComponent } from './new-billing-method.component';

describe('NewBillingMethodComponent', () => {
  let component: NewBillingMethodComponent;
  let fixture: ComponentFixture<NewBillingMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBillingMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBillingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
