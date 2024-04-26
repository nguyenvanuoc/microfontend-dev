import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedComponentsModule } from 'shared-components';
import { APP_BASE_HREF } from '@angular/common';
import { LoginModule } from './login/app.module';
export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () => import('./login/app.module').then(m => m.LoginModule)
  }
];
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        LoginModule,
        SharedComponentsModule,
        RouterModule.forRoot(APP_ROUTES),
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [HttpClient, { provide: APP_BASE_HREF, useValue: '/login/' }],
})
export class AppModule { }
