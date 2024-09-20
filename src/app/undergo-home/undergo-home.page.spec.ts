import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UndergoHomePage } from './undergo-home.page';

describe('UndergoHomePage', () => {
  let component: UndergoHomePage;
  let fixture: ComponentFixture<UndergoHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UndergoHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
