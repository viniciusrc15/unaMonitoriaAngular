import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  urlApi = 'http://localhost:3000/api';
  constructor(private http: Http) { }

  getDisciplinas() {
    return this.http
      .get(`${this.urlApi}/monitoring`)
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
