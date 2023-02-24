import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductssComponent } from './addproductss.component';

describe('AddproductssComponent', () => {
  let component: AddproductssComponent;
  let fixture: ComponentFixture<AddproductssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproductssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
