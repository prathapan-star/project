import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable,throwError } from 'rxjs';
import { retry,catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  login(username: string, password: string) {
    throw new Error('Method not implemented.');
  }
  
  apiUrl='http://localhost:4000'

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers:new HttpHeaders({
      'content-Type':'application/json',
    }),
  };
  
  getUsers():Observable<User> {
    return this.http.get<User>(this.apiUrl + '/users')
      .pipe(retry(1),catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch Employee
  getUser(name:any):Observable<User>  {
    console.log(name);
    return this.http.get<User>(this.apiUrl + '/users/' +name)
      .pipe(retry(1),catchError(this.handleError));
  }

  createUser(user:any) : Observable<User> {
    return this.http.post<User>(
      this.apiUrl+'/users',JSON.stringify(user),this.httpOptions
    ).pipe(retry(1),catchError(this.handleError));
  }

  loginUser(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post<any>(`${this.apiUrl}/login`, loginData, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  handleError(error:any)  {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage=error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status}\nMessage:${error.message}`
    }
    window.alert(errorMessage);
    return throwError(()=>{
      return errorMessage;
    })
  }
}
