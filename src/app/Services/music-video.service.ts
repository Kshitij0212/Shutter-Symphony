import { Injectable } from '@angular/core';
import { musicVideoData } from '../Models/musicVideoData';

@Injectable({
  providedIn: 'root'
})
export class MusicVideoService {

  constructor() { }

  musicList: musicVideoData[] = [
    {
      id: 1,
      src: "./assets/Videos/Music/music (1).mp4",
      title: "Shape of You"
    },
    {
      id: 2,
      src: "./assets/Videos/Music/music (2).mp4",
      title: "Rolling in the Deep"
    },
    {
      id: 3,
      src: "./assets/Videos/Music/music (3).mp4",
      title: "Blinding Lights"
    },
    {
      id: 4,
      src: "./assets/Videos/Music/music (4).mp4",
      title: "Uptown Funk"
    },
    {
      id: 5,
      src: "./assets/Videos/Music/music (5).mp4",
      title: "Hotel California"
    },
    {
      id: 6,
      src: "./assets/Videos/Music/music (6).mp4",
      title: "Billie Jean"
    },
    {
      id: 7,
      src: "./assets/Videos/Music/music (7).mp4",
      title: "Someone Like You"
    },
    {
      id: 8,
      src: "./assets/Videos/Music/music (8).mp4",
      title: "Take Me to Church"
    },
    {
      id: 9,
      src: "./assets/Videos/Music/music (9).mp4",
      title: "Smells Like Teen Spirit"
    },
    {
      id: 10,
      src: "./assets/Videos/Music/music (10).mp4",
      title: "Shallow"
    },
  ]
}
