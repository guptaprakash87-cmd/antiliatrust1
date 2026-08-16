import { HomeComponent } from './pages/home/home';
import { About } from './pages/about/about';
import { OurWork } from './pages/our-work/our-work';
import { ImpactStories } from './pages/impact-stories/impact-stories';
import { Gallery } from './pages/gallery/gallery';
import { NewsEvents } from './pages/news-events/news-events';
import { Contact } from './pages/contact/contact';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: About },
  { path: 'our-work', component: OurWork },
  { path: 'impact-stories', component: ImpactStories },
  { path: 'gallery', component: Gallery },
  { path: 'news-events', component: NewsEvents },
  { path: 'contact', component: Contact }
];