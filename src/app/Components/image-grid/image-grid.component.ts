import { Component, OnInit } from '@angular/core';
import { imageData } from 'src/app/Models/imageData';
import { ImageServiceService } from 'src/app/Services/image-service.service';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.sass']
})
export class ImageGridComponent implements OnInit {

  constructor(private imageService: ImageServiceService) {

  }

  wildlifeImages: imageData[] = [];

  ngOnInit(): void {
    this.wildlifeImages = this.imageService.wildlifeImageList;
  }

  getImagesAsPerColumn() {
    const columns: imageData[][] = [[], [], []];
    this.wildlifeImages.forEach((img, index: number) => {
      columns[index % 3].push(img);
    });
    return columns;
  }
}
