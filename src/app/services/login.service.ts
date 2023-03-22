import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, delay, Observable, of, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private subject = new BehaviorSubject<any>(undefined);
  private tokenSubStription = new Subscription();
  constructor(private router: Router) {}

  public setcountDownTimeout(timeout) {
    this.tokenSubStription.unsubscribe();
    this.tokenSubStription = of(null)
      .pipe(delay(timeout * 1000 * 60))
      .subscribe((value) => {
        this.logout();
      });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login'], { skipLocationChange: false });
  }

  public setLogin(user) {
    this.subject.next(user);
  }

  public getLogin(): Observable<any> {
    return this.subject.asObservable();
  }
}
