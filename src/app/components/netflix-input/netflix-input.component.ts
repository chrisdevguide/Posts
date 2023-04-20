import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'netflix-input',
  templateUrl: './netflix-input.component.html',
  styleUrls: ['./netflix-input.component.css'],
})
export class NetflixInputComponent implements OnInit {
  @Input() label: string = '';
  constructor() {}

  ngOnInit(): void {}
}
