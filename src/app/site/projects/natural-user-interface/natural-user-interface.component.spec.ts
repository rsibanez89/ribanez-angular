import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalUserInterfaceComponent } from './natural-user-interface.component';

describe('NaturalUserInterfaceComponent', () => {
  let component: NaturalUserInterfaceComponent;
  let fixture: ComponentFixture<NaturalUserInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalUserInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalUserInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
