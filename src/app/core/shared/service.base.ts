import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class ServiceBase {
    webApi:string = environment.api;
    uflDefault:string = '';

    constructor(public httpClient: HttpClient, public ctrl:string) {
            
    }

    private _url(url:string) :string {
        return this.uflDefault ? this.webApi +'/' + this.uflDefault + '/'  + url : this.webApi +'/' + this.ctrl + '/' + url

    }

    protected getArry<TEntity>(url:string): Observable<Array<TEntity>>{
        return this.httpClient.get<Array<TEntity>>(this._url(url));
    }

    protected get<TEntity>(url:string): Observable<TEntity>{
        return this.httpClient.get<TEntity>(this._url(url));
    }

    protected post<TEntity>(url:string, obj:TEntity): Observable<any>{
        return this.httpClient.post<any>(this._url(url),obj);
    }

    
    protected put<TEntity>(url:string, obj:TEntity): Observable<any>{
        return this.httpClient.put<any>(this._url(url) ,obj);
    }
}