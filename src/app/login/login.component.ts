import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormFields: any;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.loginFormFields = {
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    };
    this.loginForm = this.fb.group(this.loginFormFields);
  }

  logar() {
    console.log(this.loginForm.value);
  }
}
