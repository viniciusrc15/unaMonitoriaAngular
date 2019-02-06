import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  urlApi = 'https://cors-anywhere.herokuapp.com/http://apiunamonitoria-coo-app.umbler.net/api';
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
