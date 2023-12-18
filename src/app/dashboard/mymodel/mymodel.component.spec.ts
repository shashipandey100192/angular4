import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymodelComponent } from './mymodel.component';

describe('MymodelComponent', () => {
  let component: MymodelComponent;
  let fixture: ComponentFixture<MymodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MymodelComponent]
    });
    fixture = TestBed.createComponent(MymodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
