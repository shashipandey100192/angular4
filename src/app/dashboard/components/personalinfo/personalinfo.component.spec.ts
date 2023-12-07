import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalinfoComponent } from './personalinfo.component';

describe('PersonalinfoComponent', () => {
  let component: PersonalinfoComponent;
  let fixture: ComponentFixture<PersonalinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalinfoComponent]
    });
    fixture = TestBed.createComponent(PersonalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
