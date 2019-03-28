import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConektaComponent } from './conekta.component';

describe('ConektaComponent', () => {
  let component: ConektaComponent;
  let fixture: ComponentFixture<ConektaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConektaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConektaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
