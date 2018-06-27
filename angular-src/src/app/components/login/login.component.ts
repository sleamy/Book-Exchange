import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;

    constructor(private authService: AuthService,
                private router: Router) { }

    ngOnInit() {
    }

    onLoginSubmit() {
        const user = {
            username: this.username,
            password: this.password
        }

        this.authService.authenticateUser(user).subscribe((data: any) => {
            if(data.success) {
                console.log(data);
                this.authService.storeUserData(data.token, data.user);
            } else {
                console.log(data.message);
            }
        });

    }

}
