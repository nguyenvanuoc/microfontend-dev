import { Injectable } from '@angular/core';
import { Utilities } from "./utilities";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common/http";
export class AuthService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkLWNvbXBvbmVudHMvc3JjL2xpYi9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBT3hDLE1BQU0sT0FBTyxXQUFXO0lBSXBCLFlBQXFCLE1BQWUsRUFBUyxVQUFxQjtRQUE3QyxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUYzRCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixvQkFBZSxHQUFHLGNBQWMsQ0FBQztJQUV4QyxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsS0FBVTtRQUM5QixrREFBa0Q7UUFDbEQsVUFBVTtRQUNWLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN2QixPQUFPLDhCQUE4QixDQUFDO1FBQzFDLENBQUM7YUFBTSxDQUFDO1lBQ0osT0FBTyxnQ0FBZ0MsQ0FBQztRQUM1QyxDQUFDO0lBQ0wsQ0FBQztJQUNNLGVBQWUsQ0FBQyxTQUFTLEVBQUMsT0FBTztRQUNwQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFDTSxZQUFZO1FBQ2YsSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUQsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUNNLE9BQU87UUFDVixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7O1lBQU0sT0FBTyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUdELE1BQU07UUFDRixTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQzs4R0FqQ1EsV0FBVztrSEFBWCxXQUFXLGNBRlYsTUFBTTs7MkZBRVAsV0FBVztrQkFIdkIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBtYXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gICAgcHVibGljIGlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgIHB1YmxpYyBhdXRoQWNjZXNzVG9rZW4gPSAnYWNjZXNzX3Rva2VuJztcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIscHJpdmF0ZSBodHRwQ2xpZW50Okh0dHBDbGllbnQpIHsgXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBoYW5kbGVMb2dpbkVycm9yKGVycm9yOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICAvLyBY4butIGzDvSBs4buXaSDhu58gxJHDonkgdsOgIHRy4bqjIHbhu4EgbeG7mXQgdGjDtG5nIGLDoW8gcGjDuSBo4bujcFxuICAgICAgICAvLyBWw60gZOG7pTogXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgcmV0dXJuICdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGxvZ2luJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc3RvcmVVc2VyRGV0YWlsKGF1dGhUb2tlbixleHBUaW1lKSB7XG4gICAgICAgIFV0aWxpdGllcy5zZXRDb29raWUodGhpcy5hdXRoQWNjZXNzVG9rZW4sIGF1dGhUb2tlbiwgZXhwVGltZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRVc2VyVG9rZW4oKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuID0gVXRpbGl0aWVzLmdldENvb2tpZSh0aGlzLmF1dGhBY2Nlc3NUb2tlbik7XG4gICAgICAgIHJldHVybiBhY2Nlc3NUb2tlbjtcbiAgICB9XG4gICAgcHVibGljIGlzTG9naW4oKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmdldFVzZXJUb2tlbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICBcblxuICAgIGxvZ291dCgpOiB2b2lkIHtcbiAgICAgICAgVXRpbGl0aWVzLmRlbGV0ZUNvb2tpZSh0aGlzLmF1dGhBY2Nlc3NUb2tlbik7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgIH1cbn0iXX0=