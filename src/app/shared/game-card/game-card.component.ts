import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  @Input() game!: {
    title: string;
    description: string;
    releaseDate: string;
    image: string;
    rating: number;
    downloads: number;
    comingSoon: boolean;
  };

  getStars() {
    return new Array(Math.round(this.game.rating));
  }
}
