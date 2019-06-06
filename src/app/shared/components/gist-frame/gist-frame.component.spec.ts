import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GistFrameComponent } from './gist-frame.component';

describe('GistFrameComponent', () => {
  let component: GistFrameComponent;
  let fixture: ComponentFixture<GistFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GistFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
