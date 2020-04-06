

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class FlikrService {
  lat = -25.734968;
  lon = 134.489563;
  // tslint:disable-next-line:max-line-length
  private imagesUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9a7404d4afa9adac1bff5c72fae1f226&lat=${this.lat}&lon=${this.lon}&format=json&nojsoncallback=1`;
  // flickerUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';
  constructor(private http: HttpClient) { }
  getPhotos(latitude, longitude): Observable<ApiResponse> {
    console.log(latitude, longitude);
    return this.http.get<ApiResponse>(this.imagesUrl).pipe(
      // testing receiving data
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
    );
 }
 private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured : ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}






constructor(private http: HttpClient) { }
  getPhotos(long, lat): Observable<Photos[]> {
    let imagesUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=655116321eac43ba06a392fe3fe2e511&lat=' + lat + '&lon=' + long + '&format=json&nojsoncallback=1';
    return this.http.get<Photos[]>(imagesUrl).pipe(
      // testing receiving data
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
    );
 }
 private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured : ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

