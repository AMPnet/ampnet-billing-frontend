import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityStatsComponent } from './electricity-stats.component';

describe('ElectricityStatsComponent', () => {
  let component: ElectricityStatsComponent;
  let fixture: ComponentFixture<ElectricityStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricityStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
