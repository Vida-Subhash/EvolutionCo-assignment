import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, shareReplay, finalize } from 'rxjs/operators';

const MAX_REQUESTS_PER_TIME_WINDOW = 2;
const TIME_WINDOW_IN_MS = 60000; // 60 seconds

@Injectable()
export class ApiRateLimitInterceptor implements HttpInterceptor {
    private requestCount = 0;
    private requestCountResetTimeout:any;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // If the request count exceeds the maximum allowed, return an error observable
        if (this.requestCount >= MAX_REQUESTS_PER_TIME_WINDOW) {
            return new Observable(observer => {
                alert("To many requests...")
                  observer.error(new Error('Too many requests'));
              });
        }

        // Increment the request count
        this.requestCount++;

        // If there isn't already a timeout set to reset the request count, set one
        if (!this.requestCountResetTimeout) {
            this.requestCountResetTimeout = setTimeout(() => {
                this.requestCount = 0;
                this.requestCountResetTimeout = null;
            }, TIME_WINDOW_IN_MS);
        }

        // Send the request and pipe it through the tap operator to decrement the request count on completion
        return next.handle(req).pipe(
            finalize(() => {
                this.requestCount--;
            })
        );
    }
}