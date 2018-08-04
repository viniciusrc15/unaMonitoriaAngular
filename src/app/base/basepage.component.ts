import { EventEmitter } from '@angular/core';

export class BasePage {
    logged = new EventEmitter<boolean>();
    autenticado: boolean;
    constructor() {

    }

    montaCabecalho() {
        const cabecalho = new Headers();
        cabecalho.set('Content-Type', 'application/json');
        cabecalho.set('token', this.getToken());
        return cabecalho;
    }

    setToken(data) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('usuario', data.usuario);
        this.autenticado = true;
    }

    private getToken() {
        return localStorage.getItem('token');
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
