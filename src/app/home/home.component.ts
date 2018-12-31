import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeImageList = [
    { 
      image: `https://picsum.photos/1200/800?random&t=${Math.random()}`, 
      title: 'Image 1', 
      link: '/videos/video-1' 
    },
    { 
      image: `https://picsum.photos/1200/800?random&t=${Math.random()}`, 
      title: 'Image 2', 
      link: '/videos/video-2' 
    },
    { 
      image: `https://picsum.photos/1200/800?random&t=${Math.random()}`, 
      title: 'Image 3', 
      link: '/videos/video-3' 
    },
  ];
  prevented: boolean;
  images: any;

  constructor(private router: Router) {
    this.prevented = false;
  }

  ngOnInit() {
    //Get nature images
    this.images = [1, 2, 3, 4].map(() => `https://picsum.photos/1200/800?random&t=${Math.random()}`);
  }

  preventNormal(event: MouseEvent, image: any) {
    if (!image.prevented) {
      event.preventDefault();
      this.router.navigate(['./videos']);
    }
  }

}
