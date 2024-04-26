import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, Constants } from 'shared-components';
import { Utilities } from 'shared-components';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LoginService } from '../login.services';
import { environment } from "../../environments/environment";
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    loginForm: any;
    message = '';
    isLoading=false;
    passwordVisible=false;
    constructor(
        private fb: FormBuilder, 
        private authService: AuthService, 
        private loginService: LoginService, 
        private router: Router, 
        private notification: NzNotificationService
    ) { }
    redirectUrlHome(){
        window.location.href = location.host;
    }
    ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        localStorage.setItem('code',code);
        if(code){
            this.isLoading = true;
            // console.log("dskdjskdj" + code);
            this.loginService.loginSso(code, Constants.CLIENT_ID, Constants.CLIENT_SECRECT, environment.callbackURL).subscribe(
                {
                    next: (res) => {
                        // this.notification.create(
                        //     'success',
                        //     'Thành công',
                        //     'Xin chúc mừng, bạn đã đăng nhập thành công'
                        // );
                        let token = res.access_token;
                        this.authService.storeUserDetail(token, res.expires_in);
                        this.router.navigate(['/']);
                        console.log("dskdjskdj"+token);
                        

                    },
                    error: (err) => {
                        this.message = 'An error occurred during login'; // Thông báo lỗi mặc định
                    },
                }
            )
            
        }
        if (this.authService.isLogin()) {
            this.router.navigate(['/']);
        }
    }
    redirectSSO(){
        var url = environment.loginUrl + "?response_type=code&client_id=" + Constants.CLIENT_ID + "&redirect_uri=" + environment .callbackURL+"&scope=openid"
        window.location.href=url;
    }
    createNotification(type: string,title:any,mess:any): void {
        this.notification.create(
            type,
            title,
            mess
        );
    }
    onSubmit(): void {
        for (const i in this.loginForm.controls) {
            this.loginForm.controls[i].markAsDirty();
            this.loginForm.controls[i].updateValueAndValidity();
        }
        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;
        if (!this.loginForm.invalid) {
            this.message = null;
            this.isLoading = true;
            localStorage.setItem('email',username);
            this.loginService.getAccessToken(username, password).subscribe({
                next: (res) => {
                   
                    setTimeout(() => {
                        this.isLoading = false;
                        
                        this.notification.create(
                            'success',
                            'Thành công',
                            'Xin chúc mừng, bạn đã đăng nhập thành công'
                        );
                        let token = res.access_token;
                        this.authService.storeUserDetail(token, res.expires_in);
                        this.router.navigate(['/']);
                    }, 1000);
                },
                error: (err) => {
                    this.isLoading = false;
                    if (err.error && err.error.message) {
                        this.message = 'Tên đăng nhập hoặc mật khẩu không chính xác';// Lấy thông báo lỗi từ API
                    } else {
                        this.message = 'An error occurred during login'; // Thông báo lỗi mặc định
                    }
                },
            });
        }else{
            this.message="Không được để trống!"
        }
    }
}
