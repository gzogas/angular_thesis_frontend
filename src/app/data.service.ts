import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

getUsers() {
  return this.http.get('https://jsonplaceholder.typicode.com/users');
}



registerUser(user: Object) {

  
  console.log(user);
  
  this.http.post("http://127.0.0.1:3000/users", user, {headers:new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe();
}
}
