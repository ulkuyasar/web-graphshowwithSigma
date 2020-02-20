import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSimple2PageComponent } from './graph-simple2-page.component';

describe('GraphSimple2PageComponent', () => {
  let component: GraphSimple2PageComponent;
  let fixture: ComponentFixture<GraphSimple2PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphSimple2PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphSimple2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
