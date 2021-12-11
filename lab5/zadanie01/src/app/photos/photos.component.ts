import { Component, OnInit } from '@angular/core';
import { Photo } from '../Photo';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos : Photo[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPhotos().subscribe((photos) => this.photos = photos);
  }

}
