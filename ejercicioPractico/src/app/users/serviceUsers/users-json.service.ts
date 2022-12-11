import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../interface/usersInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersJsonService {

  private url: string = 'http://localhost:3000/users';


  constructor(private http: HttpClient) {
  }

  //hacer las peticiones al users http
  searchUsers(): Observable <user []>{
    return this.http.get<user []>(this.url);

  }

  addUser(user:user){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<user[]>(this.url, JSON.stringify(user), httpOptions);
  }
    
}
