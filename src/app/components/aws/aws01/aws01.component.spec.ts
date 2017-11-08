import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aws01Component } from './aws01.component';

describe('Aws01Component', () => {
  let component: Aws01Component;
  let fixture: ComponentFixture<Aws01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aws01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aws01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
