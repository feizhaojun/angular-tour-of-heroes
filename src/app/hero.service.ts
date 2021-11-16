/*
 * @Author: Mukti
 * @Date: 2021-11-16 16:42:55
 * @LastEditTime: 2021-11-16 16:55:11
 * @LastEditors: Mukti
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
