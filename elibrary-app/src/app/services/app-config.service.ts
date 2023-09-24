import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IAppConfig } from "../models/app-config.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {

    public settings: IAppConfig = {} as IAppConfig;

    public constructor(private httpClient: HttpClient){
        
    }
    public load():Promise<IAppConfig> {
        const configUrl = 'assets/config/app.config.json';
        return new Promise<IAppConfig>((resolve, reject) =>{
            this.httpClient.get<IAppConfig>(configUrl)
                .toPromise()
                .then(
                    (response) => {
                        this.settings = <IAppConfig>response;
                        resolve(this.settings);
                    }
                );
        }); 
    }
}