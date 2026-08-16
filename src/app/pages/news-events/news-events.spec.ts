import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEvents } from './news-events';

describe('NewsEvents', () => {
  let component: NewsEvents;
  let fixture: ComponentFixture<NewsEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsEvents],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
