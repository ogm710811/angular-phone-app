import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class PhoneService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(private myHttp: Http) { }

  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/phones`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

  get(id) {
    return this.myHttp.get(`${this.BASE_URL}/api/phones/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

  edit(phone) {
    return this.myHttp.put(`${this.BASE_URL}/api/phones/${phone.id}`, phone)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

  remove(id) {
    return this.myHttp.delete(`${this.BASE_URL}/api/phones/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
}
