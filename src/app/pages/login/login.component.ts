import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  destroyed$ = new Subject<void>();
  model: any = Object.assign({});
  isUser = false;
  isPass = false;

  constructor(
    private loginService: LoginService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    if (!this.model.username) {
      return;
    }

    localStorage.setItem('PCCTH_LOGIN', JSON.stringify(this.model));
    this.router.navigate(['inputDetail'], { skipLocationChange: false });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
