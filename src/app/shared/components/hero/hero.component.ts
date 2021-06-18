import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IEvent } from 'src/app/interfaces/event.interface';
import * as moment from 'moment';

@Component({
  selector: 'rj2-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit, AfterViewInit {
  @Input() event: IEvent;
  @ViewChild('slogan') slogan: ElementRef;

  constructor() {
    window.addEventListener('scroll', () => {
      const fighterImage = document.querySelectorAll('.fighterImage') as NodeListOf<HTMLElement>;
      fighterImage.forEach((img, i) => {
        const animSpeed = window.pageYOffset / 2;
        img.style.backgroundPosition = (!!i ? animSpeed : 100 - animSpeed) + '% bottom';
      });
    });
  }

  purchasePass(): void {
    console.log(`Purchase pass action for event id ${this.event.id}`);
  }

  watchLive(): void {
    console.log(`Watch live action for event id ${this.event.id}`);
  }

  stackMiddleWords(el: ElementRef): void {
    const words = el.nativeElement.innerText.split(' ');

    words.forEach((word, i) => {
      if (i !== 0 && i !== words.length - 1) {
        if (i === 1) {
          words[i] = `<span class="font-extended middleWords"><span>${word}</span>`;
        } else if (i === words.length - 2) {
          words[i] = `<span>${word}</span></span>`;
        } else {
          words[i] = `<span>${word}</span>`;
        }
      }
    });

    el.nativeElement.innerHTML = words.join(' ');
  }

  ngOnInit(): void {
    this.event.date = moment(this.event.date).utc().format('dddd, MMMM DD YYYY - hA');
  }

  ngAfterViewInit(): void {
    this.stackMiddleWords(this.slogan);
  }
}
