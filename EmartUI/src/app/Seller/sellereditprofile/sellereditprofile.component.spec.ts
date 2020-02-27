import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellereditprofileComponent } from './sellereditprofile.component';

describe('SellereditprofileComponent', () => {
  let component: SellereditprofileComponent;
  let fixture: ComponentFixture<SellereditprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellereditprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellereditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
