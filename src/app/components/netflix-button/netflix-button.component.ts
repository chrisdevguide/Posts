import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'netflix-button',
  templateUrl: './netflix-button.component.html',
  styleUrls: ['./netflix-button.component.css'],
})
export class NetflixButtonComponent implements OnInit {
  @Input() isLoading: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
