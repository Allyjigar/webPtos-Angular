import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnvComponent } from './bnv.component';

describe('BnvComponent', () => {
  let component: BnvComponent;
  let fixture: ComponentFixture<BnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
