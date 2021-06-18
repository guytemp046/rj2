import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../interfaces/event.interface';
import { EventService } from '../services/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService {

  constructor(private eventService: EventService) {}

  resolve(): Observable<IEvent> {
    return this.eventService.getEvent(1);
  }}
