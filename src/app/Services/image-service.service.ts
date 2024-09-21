import { Injectable } from '@angular/core';
import { imageData } from '../Models/imageData';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor() { }

  carouselImageList: imageData[] = [
    {
      id: 1,
      src: "../../../assets/Images/Carousel/carousel (1).jpg",
      alt: "Image1"
    },
    {
      id: 2,
      src: "../../../assets/Images/Carousel/carousel (2).jpg",
      alt: "Image2"
    },
    {
      id: 3,
      src: "../../../assets/Images/Carousel/carousel (3).jpg",
      alt: "Image3"
    },
    {
      id: 4,
      src: "../../../assets/Images/Carousel/carousel (4).jpg",
      alt: "Image4"
    },
    {
      id: 5,
      src: "../../../assets/Images/Carousel/carousel (5).jpg",
      alt: "Image5"
    }
  ]

  wildlifeImageList: imageData[] = [
    {
      id: 1,
      src: "../../../assets/Images/Wildlife/wildlife (1).jpg",
      alt: "Image1"
    },
    {
      id: 2,
      src: "../../../assets/Images/Wildlife/wildlife (2).jpg",
      alt: "Image2"
    },
    {
      id: 3,
      src: "../../../assets/Images/Wildlife/wildlife (3).jpg",
      alt: "Image3"
    },
    {
      id: 4,
      src: "../../../assets/Images/Wildlife/wildlife (4).jpg",
      alt: "Image4"
    },
    {
      id: 5,
      src: "../../../assets/Images/Wildlife/wildlife (5).jpg",
      alt: "Image5"
    },
    {
      id: 10,
      src: "../../../assets/Images/Wildlife/wildlife (10).jpg",
      alt: "Image10"
    },
    {
      id: 7,
      src: "../../../assets/Images/Wildlife/wildlife (7).jpg",
      alt: "Image7"
    },
    {
      id: 8,
      src: "../../../assets/Images/Wildlife/wildlife (8).jpg",
      alt: "Image8"
    },
    {
      id: 9,
      src: "../../../assets/Images/Wildlife/wildlife (9).jpg",
      alt: "Image9"
    },
    {
      id: 11,
      src: "../../../assets/Images/Wildlife/wildlife (11).jpg",
      alt: "Image11"
    },
    {
      id: 12,
      src: "../../../assets/Images/Wildlife/wildlife (12).jpg",
      alt: "Image12"
    },
    {
      id: 13,
      src: "../../../assets/Images/Wildlife/wildlife (13).jpg",
      alt: "Image13"
    },
    {
      id: 14,
      src: "../../../assets/Images/Wildlife/wildlife (14).jpg",
      alt: "Image14"
    },
    {
      id: 15,
      src: "../../../assets/Images/Wildlife/wildlife (15).jpg",
      alt: "Image15"
    },
    {
      id: 16,
      src: "../../../assets/Images/Wildlife/wildlife (16).jpg",
      alt: "Image16"
    },
    {
      id: 17,
      src: "../../../assets/Images/Wildlife/wildlife (17).jpg",
      alt: "Image17"
    },
    {
      id: 19,
      src: "../../../assets/Images/Wildlife/wildlife (19).jpg",
      alt: "Image19"
    },
    {
      id: 18,
      src: "../../../assets/Images/Wildlife/wildlife (18).jpg",
      alt: "Image18"
    },
    {
      id: 20,
      src: "../../../assets/Images/Wildlife/wildlife (20).jpg",
      alt: "Image20"
    },
    {
      id: 6,
      src: "../../../assets/Images/Wildlife/wildlife (6).jpg",
      alt: "Image6"
    },
    {
      id: 21,
      src: "../../../assets/Images/Wildlife/wildlife (21).jpg",
      alt: "Image21"
    },
    {
      id: 22,
      src: "../../../assets/Images/Wildlife/wildlife (22).jpg",
      alt: "Image22"
    }
  ]

}
