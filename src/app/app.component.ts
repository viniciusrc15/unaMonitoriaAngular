import { BasePage } from './base/basepage.component';
import { LoginComponent } from './login/login.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BasePage {
  verifyLogged: Boolean;

  constructor() {
    super();
    this.logged.subscribe(autenticou => {
      this.verifyLogged = autenticou;
    });
  }

  dislodge() {
    this.makeLogoff();
    this.verifyLogged = false;
  }

}
