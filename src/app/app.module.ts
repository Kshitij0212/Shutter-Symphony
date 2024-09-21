import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCarouselComponent } from './Components/image-carousel/image-carousel.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ImageGridComponent } from './Components/image-grid/image-grid.component';
import { VideoGridLayoutComponent } from './Components/video-grid-layout/video-grid-layout.component';
import { VideoCardLayoutComponent } from './Components/video-card-layout/video-card-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCarouselComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
    ImageGridComponent,
    VideoGridLayoutComponent,
    VideoCardLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
