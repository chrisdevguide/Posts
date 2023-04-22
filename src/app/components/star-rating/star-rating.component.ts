import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent {
  @Output() rating: EventEmitter<number> = new EventEmitter<number>();
  checkedStars: number = -1;
  constructor() {}

  emitRating(index: number) {
    this.checkedStars = index;
    this.rating.emit(index);
  }
}
