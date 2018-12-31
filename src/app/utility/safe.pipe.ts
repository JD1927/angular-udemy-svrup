import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  
  constructor(private sanitizer: DomSanitizer) { }

  /**
   * Valid the value and returns a secure URL
   * 
   * @param value URL param to be returned secured
   */
  transform(value: any): any {
    if (value) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(value); 
    }
  }

}
