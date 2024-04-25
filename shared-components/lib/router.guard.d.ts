import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
export declare class AuthGuard implements CanActivate {
    private authService;
    private router;
    constructor(authService: AuthService, router: Router);
    canActivate(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuard>;
}
