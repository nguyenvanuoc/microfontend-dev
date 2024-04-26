import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { SharedComponentsModule } from 'shared-components';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzSpinModule } from 'ng-zorro-antd/spin';
export const APP_ROUTES: Routes = [
    {
        path: '',
        component: AppComponent,
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        NzButtonModule,
        FormsModule,
        NzInputModule,
        ReactiveFormsModule,
        SharedComponentsModule,
        RouterModule.forChild(APP_ROUTES),
        NzNotificationModule,
        NzDividerModule,
        NzSpinModule
    ],
    providers: [HttpClient, { provide: APP_BASE_HREF, useValue: '/login/' }],
})
export class LoginModule { }
