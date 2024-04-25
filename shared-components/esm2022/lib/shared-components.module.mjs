import { NgModule } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssetUrlPipe } from './assert.pipe';
import { ErrorInterceptor } from './http.interceptor';
import * as i0 from "@angular/core";
export class SharedComponentsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkLWNvbXBvbmVudHMvc3JjL2xpYi9zaGFyZWQtY29tcG9uZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQXFCdEQsTUFBTSxPQUFPLHNCQUFzQjs4R0FBdEIsc0JBQXNCOytHQUF0QixzQkFBc0IsaUJBbEIzQixZQUFZLGFBR1osY0FBYztZQUNkLGdCQUFnQjtZQUNoQixXQUFXO1lBQ1gsbUJBQW1CLGFBU25CLFlBQVk7K0dBR1Asc0JBQXNCLGFBUnBCO1lBQ1AsVUFBVTtZQUNWLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1NBQzFFLFlBVkcsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixXQUFXO1lBQ1gsbUJBQW1COzsyRkFZZCxzQkFBc0I7a0JBcEJsQyxRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixZQUFZO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDTCxjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxtQkFBbUI7cUJBR3RCO29CQUNELFNBQVMsRUFBRTt3QkFDUCxVQUFVO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3FCQUMxRTtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTtxQkFDZjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56QXZhdGFyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9hdmF0YXInO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSHR0cENsaWVudCwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFzc2V0VXJsUGlwZSB9IGZyb20gJy4vYXNzZXJ0LnBpcGUnO1xuaW1wb3J0IHsgRXJyb3JJbnRlcmNlcHRvciB9IGZyb20gJy4vaHR0cC5pbnRlcmNlcHRvcic7XG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBc3NldFVybFBpcGVcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTnpBdmF0YXJNb2R1bGUsXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gICAgICAgIFxuICAgICAgICBcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBIdHRwQ2xpZW50LFxuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBBc3NldFVybFBpcGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZENvbXBvbmVudHNNb2R1bGUgeyB9XG4iXX0=