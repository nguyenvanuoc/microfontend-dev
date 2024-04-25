import * as i0 from '@angular/core';
import { Pipe, Injectable, NgModule } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import * as i2 from '@angular/common/http';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as i1 from '@angular/router';

class Utilities {
    static assetUrl(url) {
        // @ts-ignore
        const publicPath = __webpack_public_path__;
        const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
        const urlPrefix = url.startsWith('/') ? '' : '/';
        return `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`;
    }
    static setCookie(name, val, exp) {
        const date = new Date();
        const value = val;
        // Set it expire in 7 days
        date.setTime(date.getTime() + (exp * 1000));
        // Set it
        document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
    }
    static getCookie(name) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        }
    }
    static deleteCookie(name) {
        const date = new Date();
        // Set it expire in -1 days
        date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
        // Set it
        document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
    }
}

class AssetUrlPipe {
    transform(value) {
        return Utilities.assetUrl(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AssetUrlPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.5", ngImport: i0, type: AssetUrlPipe, name: "assetUrl" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AssetUrlPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'assetUrl' }]
        }] });

class ErrorInterceptor {
    constructor() { }
    intercept(request, next) {
        return next.handle(request).pipe(catchError((error) => {
            console.log("loi dang nhap");
            if (error.status === 400) {
                // Bỏ qua việc ghi log cho lỗi 400
                console.log("loi dang nhap");
                return throwError(error); // Hoặc return Observable.empty() để không trả về lỗi nếu không muốn gọi catchError ở subscriber
            }
            // Xử lý các lỗi khác theo ý muốn của bạn
            return throwError(error);
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: ErrorInterceptor, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: ErrorInterceptor }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: ErrorInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: () => [] });

class SharedComponentsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: SharedComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.5", ngImport: i0, type: SharedComponentsModule, declarations: [AssetUrlPipe], imports: [NzAvatarModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule], exports: [AssetUrlPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: SharedComponentsModule, providers: [
            HttpClient,
            { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
        ], imports: [NzAvatarModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: SharedComponentsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AssetUrlPipe
                    ],
                    imports: [
                        NzAvatarModule,
                        HttpClientModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    providers: [
                        HttpClient,
                        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
                    ],
                    exports: [
                        AssetUrlPipe
                    ]
                }]
        }] });

class Constants {
    static { this.DEVICE_MOBILE = 1; }
    static { this.DEVICE_TABLET = 2; }
    static { this.DEVICE_DESKTOP = 3; }
    static { this.CACHE_AUTHENTICATION_TOKEN = 'access_token'; }
    static { this.CACHE_REFRESH_TOKEN = 'refresh_token'; }
    static { this.CACHE_EXPIRES_IN = 'expires_in'; }
    static { this.CACHE_EXPIRES_AT = 'expires_at'; }
    static { this.CACHE_ID_TOKEN = 'id_token'; }
    static { this.CALLBACK_URL = 'http://localhost:8085'; }
    static { this.API_URL = 'http://localhost:3000'; }
    static { this.SERVICE_IDP_ONEGOV = 'https://idp-onegov.vnpt.vn'; }
    static { this.CLIENT_ID = 'KajBxw7JiPhkotsBgBX57BWDUP0a'; }
    static { this.CLIENT_SECRECT = 'TS7_9H35aHEly_SCCD20ZtxXKcMa'; }
}
var MENU;
(function (MENU) {
    MENU["ACTIVE_MENUS"] = "ACTIVE_MENUS";
})(MENU || (MENU = {}));

class AuthService {
    constructor(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.isAuthenticated = false;
        this.authAccessToken = 'access_token';
    }
    handleLoginError(error) {
        // Xử lý lỗi ở đây và trả về một thông báo phù hợp
        // Ví dụ: 
        if (error.status === 401) {
            return 'Invalid username or password';
        }
        else {
            return 'An error occurred during login';
        }
    }
    storeUserDetail(authToken, expTime) {
        Utilities.setCookie(this.authAccessToken, authToken, expTime);
    }
    getUserToken() {
        let accessToken = Utilities.getCookie(this.authAccessToken);
        return accessToken;
    }
    isLogin() {
        if (this.getUserToken()) {
            return true;
        }
        else
            return false;
    }
    logout() {
        Utilities.deleteCookie(this.authAccessToken);
        this.router.navigate(['/login']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AuthService, deps: [{ token: i1.Router }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AuthService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.Router }, { type: i2.HttpClient }] });

class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (!this.authService.isLogin()) {
            setTimeout(() => {
                this.router.navigate(['/login']);
            }, 100);
            return false;
        }
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AuthGuard, deps: [{ token: AuthService }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AuthGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: AuthService }, { type: i1.Router }] });

;
class AccountService {
    constructor(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.isAuthenticated = false;
        this.authAccessToken = 'access_token';
    }
    getLoggedInUser(auth_token) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth_token}`
        };
        return this.httpClient.get(Constants.API_URL + '/api/account', { headers: headers });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AccountService, deps: [{ token: i1.Router }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AccountService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: AccountService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.Router }, { type: i2.HttpClient }] });

/*
 * Public API Surface of shared-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccountService, AssetUrlPipe, AuthGuard, AuthService, Constants, ErrorInterceptor, MENU, SharedComponentsModule, Utilities };
//# sourceMappingURL=shared-components.mjs.map
