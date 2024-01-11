import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  formLogin!: FormGroup;
  toastMessage: string = '';
  showToast: boolean = false;

  constructor(
    private fb: FormBuilder,
    // private messageService: MessageService,
    private srv: AuthService,
    private router: Router
  ) {
    this.loginForm();
  }

  loginForm() {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.formLogin.valid) {
      let obj = this.formLogin.getRawValue();
      const resp = this.srv.login(obj);

      if (resp) {
        this.router.navigateByUrl('/employee');
      } else {
        this.showToast = true;
        this.toastMessage = 'Incorrect username or password';
        setTimeout(() => {
          this.showToast = false;
        }, 1500);
      }
    } else {
      this.formLogin.markAllAsTouched();
    }
  }
}
