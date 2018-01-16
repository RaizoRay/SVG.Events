import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appGreen]'
})
export class GreenDirective implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getDetails();
  }
  // @HostListener('mouseover') onMouseOver() {
  //   alert('Green');
  // }

  @HostListener('click') onClick() {
    alert('Green');
  }

  getDetails() {
    // get the requried details
  }
}
