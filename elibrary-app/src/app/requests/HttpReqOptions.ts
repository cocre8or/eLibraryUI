import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export class HttpReqOptions {
    public headers?:HttpHeaders | {
        [header: string]: string | string[];
    };
    public body?: any;
    public context?:HttpContext;
    public observe?: any;
    public params?: HttpParams | {
        [param: string]: string | number | boolean;
    };
    public responseType?: any;
}