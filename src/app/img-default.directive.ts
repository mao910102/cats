import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgDefault]'
})
export class ImgDefaultDirective {

  constructor(
    private elementRef: ElementRef
    ) {}


  @HostListener('error')
  getImageDefaul() {
    const element = this.elementRef.nativeElement;
    element.src = `../../assets/errorcat.jpeg`
  }

}
