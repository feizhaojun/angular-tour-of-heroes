/*
 * @Author: Mukti
 * @Date: 2021-11-16 16:35:46
 * @LastEditTime: 2021-11-16 16:39:44
 * @LastEditors: Mukti
 */
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
