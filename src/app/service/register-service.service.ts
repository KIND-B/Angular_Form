import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  public save = "http://localhost:8080/Student/products"

  constructor(private httpClient: HttpClient) { }

  saveStudent(data:any): Observable<any>{
    return this.httpClient.post<any>(this.save , data)

  }
}
