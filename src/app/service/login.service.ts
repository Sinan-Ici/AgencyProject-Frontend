import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl="https://localhost:44365/api/Login/login" 

  constructor(private  httpClient:HttpClient) { } 
  login(loginModel:LoginModel){
    return this.httpClient.post(this.apiUrl,loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
