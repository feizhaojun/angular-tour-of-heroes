/*
 * @Author: Mukti
 * @Date: 2021-11-16 16:20:10
 * @LastEditTime: 2021-11-16 16:57:51
 * @LastEditors: Mukti
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
  ngOnInit() {
    this.getHeroes();
  }
}
