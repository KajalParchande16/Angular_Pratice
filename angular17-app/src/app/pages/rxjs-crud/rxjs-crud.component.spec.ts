import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCrudComponent } from './rxjs-crud.component';

describe('RxjsCrudComponent', () => {
  let component: RxjsCrudComponent;
  let fixture: ComponentFixture<RxjsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
