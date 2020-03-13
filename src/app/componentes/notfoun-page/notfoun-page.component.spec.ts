import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfounPageComponent } from './notfoun-page.component';

describe('NotfounPageComponent', () => {
  let component: NotfounPageComponent;
  let fixture: ComponentFixture<NotfounPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfounPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfounPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
