import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  currCategory = 'corporate';
  active: number = 0; // Index of currently expanded image, if any
  expanded = false;
  photos: any;

  constructor(public photoService: PhotosService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryParam: string = params.get('category');
      this.getPhotos(categoryParam);
      // this.photoService.getCategories().forEach((cat: string) => {
      //   if (categoryParam === cat) {
      //     this.currCategory = categoryParam;
      //   }
      // });
    });
  }

  getPhotos(slug) {
    console.log('getPhotos()', slug);
    return this.photoService.getPhotos(photos => this.photos = photos[slug]);
  }

  next() {
    if (this.active < this.getPhotos(this.active).length - 1) {
      this.active++;
    } else if (this.getPhotos(this.active).length !== 0) {
      this.active = 0;
    }
  }

  prev() {
    if (this.active === 0) {
      this.active = this.getPhotos(this.active).length - 1;
    } else {
      this.active--;
    }
  }

  closeExpandedView() {
    this.expanded = false;
  }
}
