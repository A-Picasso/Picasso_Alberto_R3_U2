import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {
  addGameForm: FormGroup;

  constructor(private fb: FormBuilder, private gameService: GameService, private router: Router) {
    this.addGameForm = this.fb.group({
      title: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      description: ['', Validators.required],
      releaseDate: ['', Validators.required],
      downloads: ['', [Validators.required, Validators.min(0)]],
      comingSoon: [false]
    });
  }

  onSubmit() {
    if (this.addGameForm.valid) {
      this.gameService.addGame(this.addGameForm.value);
      this.router.navigateByUrl('/popular');
    }
  }
}
