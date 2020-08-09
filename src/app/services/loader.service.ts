import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loaderSubject = new Subject();
  constructor() { }
  show() {
    this.loaderSubject.next({ show: true });
  }
  hide() {
    this.loaderSubject.next({ show: false });
  }
}