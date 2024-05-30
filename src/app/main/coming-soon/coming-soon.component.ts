import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  games: any[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.games = this.gameService.getComingSoonGames();
  }
}
