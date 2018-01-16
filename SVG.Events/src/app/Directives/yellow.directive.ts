import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appYellow]'
})
export class YellowDirective implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getDetails();
  }
  // @HostListener('mouseover') onMouseOver() {
  //   alert('Yellow');
  // }

  @HostListener('click') onClick() {
    alert('Yellow');
  }

  getDetails() {
    // get the requried details
  }
}
