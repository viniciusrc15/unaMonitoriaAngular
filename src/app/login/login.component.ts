import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormFields: any;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.loginFormFields = {
      nome: [''],
      senha: ['']
    }
    this.loginForm = this.fb.group(this.loginFormFields);
  }

}
