import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class StorageService{

    public setSessionItem(key: string, value: string): void{
        sessionStorage.setItem(key,value);
    }

    public getSessionItem(key: string): string {
        return sessionStorage.getItem(key) ?? '';
    }
}