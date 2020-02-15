import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerlandingpageComponent } from './buyerlandingpage.component';

describe('BuyerlandingpageComponent', () => {
  let component: BuyerlandingpageComponent;
  let fixture: ComponentFixture<BuyerlandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerlandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerlandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
