import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardLayoutComponent } from './video-card-layout.component';

describe('VideoCardLayoutComponent', () => {
  let component: VideoCardLayoutComponent;
  let fixture: ComponentFixture<VideoCardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCardLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoCardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
