import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardValComponent } from './card-val.component';

describe('CardValComponent', () => {
  let component: CardValComponent;
  let fixture: ComponentFixture<CardValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
