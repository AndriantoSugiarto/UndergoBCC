import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperiencePage } from './experience.page';

describe('ExperiencePage', () => {
  let component: ExperiencePage;
  let fixture: ComponentFixture<ExperiencePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
