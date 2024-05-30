import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-popular-games',
  templateUrl: './popular-games.component.html',
  styleUrls: ['./popular-games.component.css']
})
export class PopularGamesComponent implements OnInit {
  games: any[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.games = this.gameService.getPopularGames();
  }
}
