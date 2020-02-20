import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCompleksPageComponent } from './graph-compleks-page.component';

describe('GraphCompleksPageComponent', () => {
  let component: GraphCompleksPageComponent;
  let fixture: ComponentFixture<GraphCompleksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphCompleksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCompleksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
