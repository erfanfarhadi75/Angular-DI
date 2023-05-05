import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipselfChildComponent } from './skipself-child.component';

describe('SkipselfChildComponent', () => {
  let component: SkipselfChildComponent;
  let fixture: ComponentFixture<SkipselfChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkipselfChildComponent]
    });
    fixture = TestBed.createComponent(SkipselfChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
