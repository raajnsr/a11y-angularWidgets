import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.css']
})
export class AccordionsComponent {

  public isCollapsed: boolean = true;
  public current: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  enableFilterIcon(index, lastIndex) {
    if (this.current === index) {
      this.current = lastIndex + 1;
    } else {
      this.current = index;
    }
  }

}
