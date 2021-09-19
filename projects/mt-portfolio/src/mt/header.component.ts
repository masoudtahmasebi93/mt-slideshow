import { Component, Input, OnInit } from '@angular/core';
import { HeaderModel } from './header.model';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerList: HeaderModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

