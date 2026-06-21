import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Newsletter } from '../models/Newsletter';
import { catchError, forkJoin, map, Observable, of, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NewsletterService {
  

    constructor(private http: HttpClient) {}

    getNewsletters(startCount: number, count: number): Observable<Newsletter[]> {
        return this.http.get<string[]>('assets/newsletters/index.json').pipe(
            switchMap(dates => {
                let startIndex = dates.length - startCount;
                let selDates = dates.slice(Math.max(startIndex - count, 0), startIndex).reverse();
                return forkJoin(
                    selDates.map(date => this.http.get<Newsletter>(`assets/newsletters/${date}.json`))
                )
            })
        );
    }
}