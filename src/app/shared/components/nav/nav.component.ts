import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isShow = false;
  user: any;
  destroyed$ = new Subject<void>();

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService
      .getLogin()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        console.log(
          '00000000000',
          JSON.parse(localStorage.getItem('PCCTH_LOGIN'))?.['username']
        );
        this.user = JSON.parse(localStorage.getItem('PCCTH_LOGIN'))?.[
          'username'
        ];
      });
  }

  logout() {
    this.loginService.logout();
  }
}
