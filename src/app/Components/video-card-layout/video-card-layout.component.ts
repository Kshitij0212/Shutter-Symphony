import { Component, OnInit } from '@angular/core';
import { adsVideoData } from 'src/app/Models/adsVideoData';
import { AdsVideoService } from 'src/app/Services/ads-video.service';

@Component({
  selector: 'app-video-card-layout',
  templateUrl: './video-card-layout.component.html',
  styleUrls: ['./video-card-layout.component.sass']
})
export class VideoCardLayoutComponent implements OnInit {

  adsList: adsVideoData[] = [];
  displayModal: boolean = false;
  selectedAd: adsVideoData | undefined;

  constructor(private adsService: AdsVideoService) {

  }

  ngOnInit(): void {
    this.adsList = this.adsService.adsList;
  }

  openModal(ad: adsVideoData) {
    this.displayModal = true;
    this.selectedAd = ad;
  }

  closeModal() {
    this.displayModal = false;
    this.selectedAd = undefined;
  }
}
