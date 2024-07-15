import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroDeleted?: string = '';
  public heroesNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'she Hulk', 'Thor'];

  removeLastHero():void {
    const deletedHero = this.heroesNames.pop();
    this.heroDeleted = deletedHero;
  }
}
