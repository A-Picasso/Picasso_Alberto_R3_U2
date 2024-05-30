import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './main-routing.module';
import { PopularGamesComponent } from './popular-games/popular-games.component';
import { MostDownloadedComponent } from './most-downloaded/most-downloaded.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { AddGameComponent } from './add-game/add-game.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    PopularGamesComponent,
    MostDownloadedComponent,
    ComingSoonComponent,
    AddGameComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class MainModule { }

