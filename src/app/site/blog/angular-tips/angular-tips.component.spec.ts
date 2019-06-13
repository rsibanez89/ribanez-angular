import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTipsComponent } from './angular-tips.component';

describe('AngularTipsComponent', () => {
  let component: AngularTipsComponent;
  let fixture: ComponentFixture<AngularTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
