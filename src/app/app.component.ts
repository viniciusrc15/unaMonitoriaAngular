import { BasePage } from './base/basepage.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BasePage {
  verifyLogged: Boolean;

  constructor(public router: Router) {
    super();
    this.logged.subscribe(autenticou => {
      this.verifyLogged = autenticou;
    });
  }

  dislodge() {
    this.makeLogoff();
    this.verifyLogged = false;
    this.router.navigate(['/pesquisa']);
  }

}
