import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceRxjsComponent } from './advance-rxjs.component';

describe('AdvanceRxjsComponent', () => {
  let component: AdvanceRxjsComponent;
  let fixture: ComponentFixture<AdvanceRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceRxjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvanceRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
