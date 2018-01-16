import { Directive, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appOrange]'
})
export class OrangeDirective implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getDetails();
  }

  // @HostListener('mouseover') onMouseOver() {
  //   alert('Orange');
  // }

  @HostListener('click') onClick() {
    alert('Orange');
  }

  getDetails() {
    // get the requried details
  }
}
