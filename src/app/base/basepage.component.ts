import { EventEmitter } from '@angular/core';

export class BasePage {
    logged = new EventEmitter<boolean>();
    autenticado: boolean;
    constructor() {

    }

    setToken(data) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('usuario', data.usuario);
        this.autenticado = true;
        this.logged.emit(this.autenticado);
    }

    isLogged() {
        const verify = (localStorage.getItem('token') === null) ? false : true;
        this.logged.emit(verify);
        return verify;
    }

    makeLogoff() {
        localStorage.clear();
    }

}
