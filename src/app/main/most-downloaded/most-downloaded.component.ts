import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-most-downloaded',
  templateUrl: './most-downloaded.component.html',
  styleUrls: ['./most-downloaded.component.css']
})
export class MostDownloadedComponent implements OnInit {
  games: any[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.games = this.gameService.getMostDownloadedGames();
  }
}