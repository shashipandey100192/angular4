import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullpageComponent } from './fullpage.component';

describe('FullpageComponent', () => {
  let component: FullpageComponent;
  let fixture: ComponentFixture<FullpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullpageComponent]
    });
    fixture = TestBed.createComponent(FullpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
