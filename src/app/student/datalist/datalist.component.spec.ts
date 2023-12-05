import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalistComponent } from './datalist.component';

describe('DatalistComponent', () => {
  let component: DatalistComponent;
  let fixture: ComponentFixture<DatalistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatalistComponent]
    });
    fixture = TestBed.createComponent(DatalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
