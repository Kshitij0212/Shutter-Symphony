import { Component } from '@angular/core';
import { imageData } from 'src/app/Models/imageData';
import { ImageServiceService } from 'src/app/Services/image-service.service';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.sass']
})
export class ImageCarouselComponent {

  constructor(private imageService: ImageServiceService) { }

  imageList: imageData[] = [];
  currentImage: imageData | undefined;
  animation: boolean = false;

  ngOnInit() {
    this.imageList = this.imageService.carouselImageList;
    this.currentImage = this.imageList[0];
  }

  nextImage() {
    this.triggerAnimation();
    if (this.currentImage?.id == this.imageList.length) {
      this.currentImage = this.imageList[0];
    } else {
      this.currentImage = this.imageList.find(image => this.currentImage?.id == image.id - 1);
    }
  }

  previousImage() {
    this.triggerAnimation();
    if (this.currentImage?.id == 1) {
      this.currentImage = this.imageList[this.imageList.length - 1];
    } else {
      this.currentImage = this.imageList.find(image => this.currentImage?.id == image.id + 1);
    }
  }

  triggerAnimation() {
    this.animation = true;
    setTimeout(() => {
      this.animation = false;
    }, 1000);
  }
}
