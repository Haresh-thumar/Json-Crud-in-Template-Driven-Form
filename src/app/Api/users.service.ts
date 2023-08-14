import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/Users';

  params = new HttpParams()
    .set('para1', "value1")
    .set('para2', "value2");

  headers = new HttpHeaders({
    'content-type': 'application/json', // Create Content-type
    'Authorization': 'haxlk5485locjs', // Autharized Key
    'HareshParam': 'Thumar' // Custom Key-Value
  });

  getAllUsers() {
    return this.http.get<Array<UserDetails>>(this.url);
  }

  addUser(body) {
    return this.http.post(this.url, body, {
      'headers': this.headers,
      // APIKey: 'E207QC9yPki3HDScTHdH7Q',
      // AppId: 'da39c9fa-b0cc-4298-93cc-f815d015b5e2',
      observe: 'body',
      reportProgress: true,
      'params': this.params
    });
  }

  // addUser(body) {
  //   return this.http.post(this.url, body, {
  //     'headers': this.headers,
  //     withCredentials: true
  //   });
  // }

  updateUser(body) {
    return this.http.put(`${this.url}/${body.id}`, body);
  }

  deleteUser(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}

export class UserDetails {
  id: number;
  firstname: string;
  lastname: string;
  city: string;
  pincode: string;
  mobileNo: string;
}
