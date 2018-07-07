import { BaseService } from './../base/base.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormFields: any;

  constructor(public fb: FormBuilder, private baseSrv: BaseService) { }

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
      alert('logado');
    })
    .catch(e => {
      alert('usuario e senha invalido');
    });
  }
}
