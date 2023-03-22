import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}${path}`, {
        headers: this.setHeaders(),
        params,
      })
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError(this.formatErrors)
      );
  }

  public put(path: string, body: any = {}): Observable<any> {
    return this.http
      .put(`${environment.apiUrl}${path}`, JSON.stringify(body), {
        headers: this.setHeaders(),
      })
      .pipe(
        map((res: any) => {
          return res.json();
        }),
        catchError(this.formatErrors)
      );
  }

  input(param: any) {
    return param;
  }

  output(result: any) {
    return result;
  }

  connector(param: any, path: any) {
    const url = `${environment.apiUrl}${path}`;
    const body = this.input(param);
    return this.http.post(url, body, this.httpClientOptions());
  }

  postV2(path: any, param: any) {
    const self = this;
    return new Promise(function (resolve, reject) {
      self.connector(param, path).subscribe(
        (res: any) => {
          resolve(self.output(res['body']));
        },
        (err) => {
          resolve(err);
        }
      );
    });
  }

  public post(path: string, body: any = {}): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}${path}`, JSON.stringify(body), {
        headers: this.setHeaders(),
      })
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError(this.formatErrors)
      );
  }

  public postFile(path: string, body: any = {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, body).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(this.formatErrors)
    );
  }

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    return new HttpHeaders(headersConfig);
  }

  httpClientOptions() {
    const httpClientOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      observe: 'response' as 'body',
    };

    return httpClientOptions;
  }

  private formatErrors(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred: ' + error.message;
    if (error.error && error.error instanceof ErrorEvent) {
      errorMessage = `${error.error.message}`;
    } else if (error.error && error.error instanceof Object) {
      errorMessage = `${error.error.message}`;
    }
    return throwError(errorMessage);
  }
}
