import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class AuthService {
    private router;
    private httpClient;
    isAuthenticated: boolean;
    authAccessToken: string;
    constructor(router: Router, httpClient: HttpClient);
    handleLoginError(error: any): string;
    storeUserDetail(authToken: any, expTime: any): void;
    getUserToken(): string;
    isLogin(): boolean;
    logout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
