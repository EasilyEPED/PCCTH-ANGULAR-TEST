import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class PagesComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  menuExpanded() {
    var r = document.getElementById('layout-menu-fixed');
    r.setAttribute('class', 'layout-menu-expanded');
  }
}
