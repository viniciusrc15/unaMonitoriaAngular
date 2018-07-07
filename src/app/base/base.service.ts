import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class BaseService {
  urlApi = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  consultaCursos() {
    // var cabecalho = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .get(`${this.urlApi}/course`)
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  consultaMonitoria(parametros) {
    if (parametros.disciplina === '') {
      return this.http
        .get(`${this.urlApi}/monitoring/${parametros.curso}`)
        .toPromise()
        .then(res => res)
        .catch(this.handleError);
    } else {
      return this.http
        .get(`${this.urlApi}/monitoring/${parametros.curso}/${parametros.disciplina}`)
        .toPromise()
        .then(res => res)
        .catch(this.handleError);
    }

  }

  login(data) {
    const cabecalho = new Headers();
    cabecalho.set('Content-Type', 'application/json');
    return this.http
      .post(`${this.urlApi}/login/`, data, {headers: cabecalho})
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
