import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from '../shared/game-card/game-card.component';
import { MenuComponent } from '../shared/menu/menu.component';

@NgModule({
  declarations: [GameCardComponent, MenuComponent],
  imports: [
    CommonModule
  ],
  exports: [GameCardComponent, MenuComponent]
})
export class SharedModule { }
