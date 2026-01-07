import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempErrorComponent } from './temp-error.component';

describe('TempErrorComponent', () => {
  let component: TempErrorComponent;
  let fixture: ComponentFixture<TempErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
