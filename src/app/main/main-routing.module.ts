import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularGamesComponent } from './popular-games/popular-games.component';
import { MostDownloadedComponent } from './most-downloaded/most-downloaded.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { AddGameComponent } from './add-game/add-game.component';

export const routes: Routes = [
  { path: 'popular', component: PopularGamesComponent },
  { path: 'downloaded', component: MostDownloadedComponent },
  { path: 'soon', component: ComingSoonComponent },
  { path: 'add', component: AddGameComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
