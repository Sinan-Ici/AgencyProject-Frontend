import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { AlertifyService } from 'src/app/service/alertify.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/loginModel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  models:LoginModel

  constructor(private loginService:LoginService, 
    private alertifyService:AlertifyService,
    private formBuilder:FormBuilder,
    private router:Router) { }
  ngOnInit(): void {
    this.createLoginForm();
  }
  

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      userName: ["",Validators.required],
      role: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)

      this.loginService.login(loginModel).subscribe(
        next => {
          this.alertifyService.success("Logged in successfully!");

        },
        error => {
          this.alertifyService.error("Failed to login..");
        }
      );
    }
  }
  goToPage(pageName:string):void{
    {
      this.router.navigate(['user']);

    }
    
  }


  

}
