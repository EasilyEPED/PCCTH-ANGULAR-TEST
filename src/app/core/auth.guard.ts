import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  menuList: any = [];
  user: any = {};
  subject = new Subject<any>();
  sub: any;

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkComplete(state).then((status) => {
      return status;
    });
  }

  async checkComplete(state: any) {
    let loginuser: any = localStorage.getItem('PCCTH_LOGIN');
    if (!loginuser?.username && state.url === '/404') {
      return false;
    }

    loginuser = loginuser ? JSON.parse(loginuser) : Object.assign({});

    let allowUrls = this.allowUrlsPages();
    if (!allowUrls.find((p) => p.path === state.url) && state.url !== '/') {
      this.router.navigate(['404'], { skipLocationChange: false });
      return false;
    }

    if (loginuser?.username) {
      if (
        allowUrls.find((p) => p.path === state.url && p.level === 1) ||
        state.url === '/'
      ) {
        // url lv 1 for example login, register, etc. when have sesstion set can't redirect to their url.
        this.router.navigate(['inputDetail'], { skipLocationChange: false });
        return false;
      }

      return true;
    }

    if (allowUrls.find((p) => p.path === state.url && p.level === 1))
      return true;

    this.router.navigate(['login'], { skipLocationChange: false });
    return false;
  }

  allowUrlsPages() {
    let urls = [];
    this.router.config[0]['_loadedRoutes'].map((r) => {
      urls.push({ level: 1, path: `/${r.path}` });
      if (r['children'] && r['children'].length > 0)
        r['children'].map((c) => urls.push({ level: 2, path: `/${c.path}` }));
    });

    return urls.filter((p) => !['/**', '/'].includes(p.path));
  }
}
