import { Component, OnInit } from '@angular/core';
import { Gallery, YoutubeItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  constructor(
    private gallery: Gallery
  ) { }

  ngOnInit() {
    const galleryRef = this.gallery.ref('matchesGallery');

    galleryRef.load([
      new YoutubeItem({ src: '0o5NopYu3J0' })
    ]);
  }

}
