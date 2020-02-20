import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSimplePageComponent } from './graph-simple-page.component';

describe('GraphSimplePageComponent', () => {
  let component: GraphSimplePageComponent;
  let fixture: ComponentFixture<GraphSimplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphSimplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphSimplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
