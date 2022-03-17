import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl:"https:localhost:44365/api/User/"

  constructor(private httpClient:HttpClient) { }

  addAgency(loginModel:LoginModel){
    return this.httpClient.post(this.apiUrl+"addagency",loginModel)
  }
  addCustomer(loginModel:LoginModel){
    return this.httpClient.post(this.apiUrl+"addcustomer",loginModel)
  }
  deleteAgency(loginModel:LoginModel){
    return this.httpClient.post(this.apiUrl+"deleteagency",loginModel)
  }
  deleteCustomer(loginModel:LoginModel){
    return this.httpClient.post(this.apiUrl+"deletecustomer",loginModel)
  }

    
}
