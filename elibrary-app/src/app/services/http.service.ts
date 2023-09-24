import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Params } from "@angular/router";
import { StorageService } from "./storage.service";
import {HttpReqOptions} from "../requests/HttpReqOptions";
import { IEbook } from "../models/ebook.model";

@Injectable({providedIn:'root'})
export class HttpService {
    protected basePath = ''

    public constructor(
        private http: HttpClient,
        private storage: StorageService
    ){}

    public setBasePath(path: string): void{
        this.basePath = path;
    }

    public get(url: string, params?: object, headers?:HttpHeaders): Observable<any[]>{
        const options = this.setHttpRequestOptions(params, headers);
        const fullUrl = this.basePath + url;
        console.log(fullUrl);
        return this.http.get<any>(fullUrl)
        .pipe(
           map(response => response.books.map((books: { author: any; pages: any; title: any; year: any; checkedOut: any; lastCheckedOutDate: any; checkedOutBy: any; }) => {
           return {
                author: books.author,
                pages: books.pages,
                title: books.title,
                year: books.year,
                checkedOut: Boolean(JSON.parse(books.checkedOut)),
                lastCheckedOutDate: books.lastCheckedOutDate,
                checkedOutBy: books.checkedOutBy
                }
            })),
            catchError(error => {
            console.log("error occured");
            return throwError(() => new HttpErrorResponse(error));
          })
        );
    }

    public post<T>(url: string, body?: object, headers?:HttpHeaders): Observable<T>{
        const options = this.setHttpRequestOptions(undefined, headers);
        const fullUrl = this.basePath + url;
        return this.http.post<T>(fullUrl, JSON.stringify(body || {}), options)
        .pipe(
            map((response: any) => response.body),
            catchError(error => {
            return throwError(() => new HttpErrorResponse(error));
          })
        );
    }

    private setHttpRequestOptions(params?: Params, addHeaders?: HttpHeaders): HttpReqOptions{
        let headers: HttpHeaders = addHeaders || new HttpHeaders();
        headers = headers
          .set('Content-Type','application/json')
          .set('Authorization', this.storage.getSessionItem('Authorization') );

        const options: HttpReqOptions = {
            headers,
            observe:'response'
        };

        return options;
    }
}