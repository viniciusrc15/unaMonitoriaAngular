import { BasePage } from './../base/basepage.component';
import { BaseService } from './../base/base.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BasePage implements OnInit {
  loginForm: FormGroup;
  loginFormFields: any;

  constructor(
    public fb: FormBuilder,
    private baseSrv: BaseService,
    public router: Router) {
    super();
   }

  ngOnInit() {
    this.loginFormFields = {
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    };
    this.loginForm = this.fb.group(this.loginFormFields);
  }

  logar() {
    this.baseSrv.login(this.loginForm.value)
    .then(res => {
      this.dataLogged(res);
      this.router.navigate(['/pesquisa']);
    })
    .catch(e => {
      alert('usuario e senha inv');
    });
  }

  private dataLogged(res) {
    console.log(res.headers.get('Access-Token'));
    const data = {
      token: res.headers.get('Access-Token'),
      usuario: this.loginForm.value.usuario
    };
    this.setToken(data);
  }
}
