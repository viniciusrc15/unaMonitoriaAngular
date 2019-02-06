import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonitoresService {
  urlApi = 'https://cors-anywhere.herokuapp.com/http://apiunamonitoria-coo-app.umbler.net/api';
  constructor(private http: Http) { }

  getMonitores() {
    return this.http
      .get(`${this.urlApi}/monitors/whithout`)
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
