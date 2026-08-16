import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactStories } from './impact-stories';

describe('ImpactStories', () => {
  let component: ImpactStories;
  let fixture: ComponentFixture<ImpactStories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactStories],
    }).compileComponents();

    fixture = TestBed.createComponent(ImpactStories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
