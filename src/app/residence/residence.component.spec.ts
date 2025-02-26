import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RESIDENCEComponent } from './residence.component';

describe('RESIDENCEComponent', () => {
  let component: RESIDENCEComponent;
  let fixture: ComponentFixture<RESIDENCEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RESIDENCEComponent]
    });
    fixture = TestBed.createComponent(RESIDENCEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
