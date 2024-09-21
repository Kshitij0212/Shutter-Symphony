import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGridLayoutComponent } from './video-grid-layout.component';

describe('VideoGridLayoutComponent', () => {
  let component: VideoGridLayoutComponent;
  let fixture: ComponentFixture<VideoGridLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoGridLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGridLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
