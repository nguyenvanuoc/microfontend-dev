import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { Constants } from 'shared-components';
import { JwtToken } from './login.model';
import { environment } from '../environments/environment';
const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
@Injectable({
    providedIn: 'root'
})
export class LoginService {


    constructor(private http: HttpClient) { }
    
    // getAccessToken(username,password): Observable<any> {
        
    //     // Chuyển đổi dữ liệu thành x-www-form-urlencoded
    //     const body = new URLSearchParams();
    //     body.set('grant_type','password');
    //     body.set('username',username);
    //     body.set('password',password);
    //     body.set('client_id','qdvCRtAmMeChgxBo_xuxLAXVN04a');
    //     body.set('client_secret','yOn0PCto44hb0hgCKFYINUhEsKYa');
    //     body.set('scope','openid');
    //     return this.http.post<any>(Constants.API_URL + '/oauth2/token', body, { headers }).pipe(
    //         catchError(error => {
    //             return throwError(error);
    //         })
    //     );
    // }
    getAccessToken(username,password): Observable<any> {
        
        // Chuyển đổi dữ liệu thành x-www-form-urlencoded
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const body = {
            "email":username,
            "password":password
        }
        console.log(body);
        return this.http.post<any>(environment.API_URL + '/auth/login', JSON.stringify(body), { headers }).pipe(
            catchError(error => {
                return throwError(error);
            })
        );
    }
    
    loginSso(
        code: string,
        client_id: string,
        client_secret: string,
        redirectUri: string
    ): Observable<any> {
        const payload = new URLSearchParams();
        payload.set('grant_type', 'authorization_code')
        payload.set('code', code)
        payload.set('redirect_uri', redirectUri)
        payload.set('client_id', client_id)
        payload.set('client_secret', client_secret);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (
            this.http
                .post<JwtToken>(Constants.API_URL + '/oauth2/token',payload, {headers})
                .pipe()
        );
    }
}