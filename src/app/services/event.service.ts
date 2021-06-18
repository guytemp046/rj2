import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEvent } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  constructor(private http: HttpClient) { }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`${environment.apiUrl}/events/${id}.json`);
  }
}
