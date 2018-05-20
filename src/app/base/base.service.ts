import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class BaseService {

  constructor(private http: Http) { }

  consultaCursos(){
    //var cabecalho = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .get('http://localhost:8100/api/course')
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  consultaMonitoria(parametros){
    console.log(parametros);
    if (parametros.disciplina == ""){
      return this.http
      .get('http://localhost:8100/api/monitoring/' + parametros.curso)
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
    } else {
      return this.http
      .get('http://localhost:8100/api/monitoring/' + parametros.curso + '/' + parametros.disciplina)
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
    }
    
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
