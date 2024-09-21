import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { musicVideoData } from 'src/app/Models/musicVideoData';
import { MusicVideoService } from 'src/app/Services/music-video.service';

@Component({
  selector: 'app-video-grid-layout',
  templateUrl: './video-grid-layout.component.html',
  styleUrls: ['./video-grid-layout.component.sass']
})
export class VideoGridLayoutComponent implements OnInit {

  musicVideos: musicVideoData[] = [];
  highlightedVideo !: musicVideoData;

  @ViewChild("highlight") highlightSection !: ElementRef;

  constructor(private videoService: MusicVideoService) {

  }

  ngOnInit(): void {
    this.musicVideos = this.videoService.musicList;
    this.highlightedVideo = this.musicVideos[0];
  }

  selectVideo(selectedVideo: musicVideoData) {
    this.highlightedVideo = selectedVideo;
    this.goToHighlight();
  }

  goToHighlight() {
    this.highlightSection.nativeElement.scrollIntoView({ behaviour: 'smooth' });
  }
}
