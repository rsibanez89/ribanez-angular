import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDesignComponent } from './software-design.component';

describe('SoftwareDesignComponent', () => {
  let component: SoftwareDesignComponent;
  let fixture: ComponentFixture<SoftwareDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
