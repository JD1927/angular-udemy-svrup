import { Component, OnInit } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  //Variables
  title = 'Video List';
  // videoList = ['Item 1','Item 2','Item 3'] JSON
  videoList = [
    {
      name: 'Item 1',
      slug: 'item-1',
      embed: `https://www.youtube.com/embed/ue5oHmUGiMM`,
    },
    {
      name: 'Item 2',
      slug: 'item-2',
      embed: `https://www.youtube.com/embed/ue5oHmUGiMM`,
    },
    {
      name: 'Item 3',
      slug: 'item-3',
      embed: `https://www.youtube.com/embed/ue5oHmUGiMM`,
    },
    {
      name: 'Item 4',
      slug: 'item-4',
      embed: `https://www.youtube.com/embed/ue5oHmUGiMM`,
    },
  ];
  todayDate: Date;
  constructor(/* private sanitizer: DomSanitizer */) { }

  ngOnInit() {
    this.todayDate = new Date();
  }
  /**
   * Return a secure URL to the template
   * 
   * @param item Embed property that contains the youtube video url
   */
  /* getEmbedUrl(item){It was change it as Pipe to be used for many components
    return this.sanitizer.bypassSecurityTrustResourceUrl(item);
  } */

}

// ng g c component-name
