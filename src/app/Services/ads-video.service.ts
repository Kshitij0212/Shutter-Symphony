import { Injectable } from '@angular/core';
import { adsVideoData } from '../Models/adsVideoData';

@Injectable({
  providedIn: 'root'
})
export class AdsVideoService {

  constructor() { }

  adsList: adsVideoData[] = [
    {
      id: 1,
      director: "David Fincher",
      brand: "Marlboro",
      src: "../../../assets/Videos/Advertisement/advertisement (1).mp4",
      images: [
        {
          id: 1,
          src: "../../../assets/Images/Advertisement/advertisement (1).jpg",
          alt: "ads1"
        },
        {
          id: 2,
          src: "../../../assets/Images/Advertisement/advertisement (2).jpg",
          alt: "ads2"
        },
        {
          id: 3,
          src: "../../../assets/Images/Advertisement/advertisement (3).jpg",
          alt: "ads3"
        }
      ]
    },
    {
      id: 2,
      director: "Ridley Scott",
      brand: "Apple",
      src: "../../../assets/Videos/Advertisement/advertisement (2).mp4",
      images: [
        {
          id: 1,
          src: "../../../assets/Images/Advertisement/advertisement (4).jpg",
          alt: "ads1"
        },
        {
          id: 2,
          src: "../../../assets/Images/Advertisement/advertisement (5).jpg",
          alt: "ads2"
        },
        {
          id: 3,
          src: "../../../assets/Images/Advertisement/advertisement (6).jpg",
          alt: "ads3"
        }
      ]
    },
    {
      id: 3,
      director: "Michel Gondry",
      brand: "Jockey",
      src: "../../../assets/Videos/Advertisement/advertisement (4).mp4",
      images: [
        {
          id: 1,
          src: "../../../assets/Images/Advertisement/advertisement (7).jpg",
          alt: "ads1"
        },
        {
          id: 2,
          src: "../../../assets/Images/Advertisement/advertisement (8).jpg",
          alt: "ads2"
        },
        {
          id: 3,
          src: "../../../assets/Images/Advertisement/advertisement (9).jpg",
          alt: "ads3"
        }
      ]
    },
    {
      id: 4,
      director: "Harmony Korine",
      brand: "Nyka",
      src: "../../../assets/Videos/Advertisement/advertisement (3).mp4",
      images: [
        {
          id: 1,
          src: "../../../assets/Images/Advertisement/advertisement (10).jpg",
          alt: "ads1"
        },
        {
          id: 2,
          src: "../../../assets/Images/Advertisement/advertisement (11).jpg",
          alt: "ads2"
        },
        {
          id: 3,
          src: "../../../assets/Images/Advertisement/advertisement (12).jpg",
          alt: "ads3"
        }
      ]
    },
    {
      id: 5,
      director: "Wes Anderson",
      brand: "H&M",
      src: "../../../assets/Videos/Advertisement/advertisement (5).mp4",
      images: [
        {
          id: 1,
          src: "../../../assets/Images/Advertisement/advertisement (14).jpg",
          alt: "ads1"
        },
        {
          id: 2,
          src: "../../../assets/Images/Advertisement/advertisement (15).jpg",
          alt: "ads2"
        },
        {
          id: 3,
          src: "../../../assets/Images/Advertisement/advertisement (13).jpg",
          alt: "ads3"
        }
      ]
    }
  ]
}
