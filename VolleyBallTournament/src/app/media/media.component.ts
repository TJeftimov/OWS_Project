import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryRef, ImageItem, YoutubeItem, GalleryItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor(
    private gallery: Gallery
  ) { }

  ngOnInit() {
    const galleryRef: GalleryRef = this.gallery.ref('mediaGallery');

    galleryRef.load([
      new ImageItem({ src: '/assets/images/media/media1.jpg', thumb: '/assets/images/media/media1.jpg' }),
      new ImageItem({ src: '/assets/images/media/media2.jpg', thumb: '/assets/images/media/media2.jpg' }),
      new ImageItem({ src: '/assets/images/media/media3.jpg', thumb: '/assets/images/media/media3.jpg' }),
      new ImageItem({ src: '/assets/images/media/media4.jpg', thumb: '/assets/images/media/media4.jpg' }),
      new ImageItem({ src: '/assets/images/media/media5.jpg', thumb: '/assets/images/media/media5.jpg' }),
      new ImageItem({ src: '/assets/images/media/media6.jpg', thumb: '/assets/images/media/media6.jpg' }),
      new ImageItem({ src: '/assets/images/media/media7.jpg', thumb: '/assets/images/media/media7.jpg' }),
      new ImageItem({ src: '/assets/images/media/media8.jpg', thumb: '/assets/images/media/media8.jpg' }),
      new ImageItem({ src: '/assets/images/media/media9.jpg', thumb: '/assets/images/media/media9.jpg' }),
      new ImageItem({ src: '/assets/images/media/media10.jpg', thumb: '/assets/images/media/media10.jpg' }),
      new ImageItem({ src: '/assets/images/media/media11.jpg', thumb: '/assets/images/media/media11.jpg' }),
      new ImageItem({ src: '/assets/images/media/media12.jpg', thumb: '/assets/images/media/media12.jpg' }),
      new ImageItem({ src: '/assets/images/media/media13.jpg', thumb: '/assets/images/media/media13.jpg' }),
      new YoutubeItem({ src: '0o5NopYu3J0' })
    ]);
  }

}
