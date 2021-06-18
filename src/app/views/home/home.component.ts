import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/interfaces/event.interface';

@Component({
  selector: 'rj2-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  event: IEvent = null;

  constructor(private route: ActivatedRoute) {
    this.event = this.route.snapshot.data.event as IEvent;
  }

  ngOnInit(): void {}
}
