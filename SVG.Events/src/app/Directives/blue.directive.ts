import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appBlue]'
})
export class BlueDirective implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getDetails();
  }
  // @HostListener('mouseover') onMouseOver() {
  //   alert('Blue');
  // }

  @HostListener('click') onClick() {
    alert('Blue');
  }

  getDetails() {
    // get the requried details
  }
}
