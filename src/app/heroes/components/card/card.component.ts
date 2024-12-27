import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroe.interface';

@Component({
  selector: 'heroes-hero-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() hero!: Hero;

  ngOnInit(): void {
    if (!this.hero) throw Error('Hero property is required');
  }
}
