import { Injectable } from '@angular/core';
import * as dataEvents from "./events.json";
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  urlserver ="http://190.131.209.106";

  constructor() { }

  getEvents(){
    return fetch(`${this.urlserver}/events`).then(
      response => response.json()
    )
  }

  getLocalEvents(){
    return dataEvents;
  }
}

