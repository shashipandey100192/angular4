import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypipeComponent } from './mypipe.component';

describe('MypipeComponent', () => {
  let component: MypipeComponent;
  let fixture: ComponentFixture<MypipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MypipeComponent]
    });
    fixture = TestBed.createComponent(MypipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
