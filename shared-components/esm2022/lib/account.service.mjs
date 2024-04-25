import { Injectable } from '@angular/core';
import { Constants } from './constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common/http";
;
export class AccountService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkLWNvbXBvbmVudHMvc3JjL2xpYi9hY2NvdW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBU3ZDLENBQUM7QUFPRixNQUFNLE9BQU8sY0FBYztJQUl2QixZQUFxQixNQUFlLEVBQVMsVUFBcUI7UUFBN0MsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUFTLGVBQVUsR0FBVixVQUFVLENBQVc7UUFGM0Qsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsb0JBQWUsR0FBRyxjQUFjLENBQUM7SUFFeEMsQ0FBQztJQUNELGVBQWUsQ0FBQyxVQUFVO1FBQ3RCLE1BQU0sT0FBTyxHQUFHO1lBQ1osY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxlQUFlLEVBQUUsVUFBVSxVQUFVLEVBQUU7U0FDMUMsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQVksU0FBUyxDQUFDLE9BQU8sR0FBRSxjQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUNuRyxDQUFDOzhHQVpRLGNBQWM7a0hBQWQsY0FBYyxjQUpiLE1BQU07OzJGQUlQLGNBQWM7a0JBTDFCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgbWFwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbnRlcmZhY2UgQWNjb3VudCB7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICByb2xlczogW107XG4gICAgZGVwYXJ0bWVudE5hbWU6IHN0cmluZztcbiAgICBiaXJ0aGRheTogc3RyaW5nO1xuICAgIG1vYmlsZTogc3RyaW5nO1xufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cblxuZXhwb3J0IGNsYXNzIEFjY291bnRTZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICBwdWJsaWMgYXV0aEFjY2Vzc1Rva2VuID0gJ2FjY2Vzc190b2tlbic7XG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyIDogUm91dGVyLHByaXZhdGUgaHR0cENsaWVudDpIdHRwQ2xpZW50KSB7IFxuICAgIH1cbiAgICBnZXRMb2dnZWRJblVzZXIoYXV0aF90b2tlbik6IE9ic2VydmFibGU8QWNjb3VudFtdPiB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aF90b2tlbn1gXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PEFjY291bnRbXT4oQ29uc3RhbnRzLkFQSV9VUkwgKycvYXBpL2FjY291bnQnLCB7IGhlYWRlcnMgOiBoZWFkZXJzIH0pXG4gICAgfVxufSJdfQ==