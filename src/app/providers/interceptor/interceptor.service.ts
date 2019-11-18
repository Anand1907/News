import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  Router
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Add any headers, if applicable
        const headers = new HttpHeaders({
        });

        const clonedreq = request.clone({headers});

        return next.handle(clonedreq)
    .pipe(tap((ev: HttpEvent<any>) => {
				if (ev instanceof HttpResponse) {
					console.log('Response -->', ev);
				}
			}, (error: any) => {
        if (error instanceof HttpErrorResponse) {
          console.log('Error -->', error);
          // Handle Project Specific Error Codes
          // Finally Throw the Error back to Caller
          return throwError(error);
        }
      }));
    }
}
