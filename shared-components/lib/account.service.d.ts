import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
interface Account {
    username: string;
    name: string;
    email: string;
    roles: [];
    departmentName: string;
    birthday: string;
    mobile: string;
}
export declare class AccountService {
    private router;
    private httpClient;
    isAuthenticated: boolean;
    authAccessToken: string;
    constructor(router: Router, httpClient: HttpClient);
    getLoggedInUser(auth_token: any): Observable<Account[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccountService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AccountService>;
}
export {};
