import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestApiService {

  constructor(private httpClient: HttpClient) { }
  public getTestUser(): Observable<any>{
    //https://gorest.co.in/public-api/users
    return this.httpClient.get('http://worldtimeapi.org/api/timezone/America/Argentina/Salta');
  }
  public getUserDetail(page:any){
    return this.httpClient.get('https://reqres.in/api/users?page='+page); 
  }
}
