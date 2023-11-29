import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTagFormComponent } from './add-tag-form.component';

describe('AddTagFormComponent', () => {
  let component: AddTagFormComponent;
  let fixture: ComponentFixture<AddTagFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTagFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTagFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
