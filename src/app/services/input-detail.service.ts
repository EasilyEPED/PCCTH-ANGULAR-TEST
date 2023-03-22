import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class InputDetailService {
  private subject = new BehaviorSubject<any>(undefined);

  constructor() { }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

  setData(data: any) {
    this.subject.next(data);
  }
}
