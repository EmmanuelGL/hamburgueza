import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgesaComponent } from './hamburgesa.component';

describe('HamburgesaComponent', () => {
  let component: HamburgesaComponent;
  let fixture: ComponentFixture<HamburgesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburgesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
