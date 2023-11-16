import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyheaderComponent } from './myheader.component';

describe('MyheaderComponent', () => {
  let component: MyheaderComponent;
  let fixture: ComponentFixture<MyheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyheaderComponent]
    });
    fixture = TestBed.createComponent(MyheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
