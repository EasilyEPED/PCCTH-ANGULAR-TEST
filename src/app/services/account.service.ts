import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private apiservice: ApiService) {}

  public login(param: any) {
    return this.apiservice.post(`/account/login`, param).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
