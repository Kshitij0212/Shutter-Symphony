import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ImageGridComponent } from './Components/image-grid/image-grid.component';
import { VideoCardLayoutComponent } from './Components/video-card-layout/video-card-layout.component';
import { VideoGridLayoutComponent } from './Components/video-grid-layout/video-grid-layout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'wild-life', component: ImageGridComponent, pathMatch: 'full' },
  { path: 'advertisement', component: VideoCardLayoutComponent, pathMatch: 'full' },
  { path: 'music', component: VideoGridLayoutComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
