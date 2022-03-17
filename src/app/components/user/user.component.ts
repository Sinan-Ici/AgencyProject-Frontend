import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/service/alertify.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginForm:FormGroup


  constructor(private userService:UserService,
    private formBuilder:FormBuilder,
    private alertifyService:AlertifyService) { }

  ngOnInit(): void {
    this.createLoginForm()
  }


  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      userID:["",Validators.required],
      userName:["",Validators.required],
      role: ["",Validators.required],
      agency: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  
  addAgency(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)
      console.log(this.loginForm.value);

      this.userService.addAgency(loginModel).subscribe(
        next => {
          this.alertifyService.success("Agency is added!");

        },
        error => {
          this.alertifyService.error("Failed to add agency..");
        }
      );
    }
  }

 
  deleteAgency(){
    if(this.loginForm.valid){
      let loginModel=Object.assign({},this.loginForm.value)
      this.userService.deleteAgency(loginModel).subscribe(
        next => {
          this.alertifyService.success("Agency is Deleted!");

        },
        error => {
          this.alertifyService.error("Failed to delete agency!");
        }
      );
    }
  }
  deleteCustomer(){
    if(this.loginForm.valid){
      let loginModel=Object.assign({},this.loginForm.value)
      this.userService.deleteCustomer(loginModel).subscribe(
        next => {
          this.alertifyService.success("Customer is Deleted!");

        },
        error => {
          this.alertifyService.error("Failed to delete customer!");
        }
      )
    }
  }
  addCustomer(){
    if(this.loginForm.valid){
      let loginModel=Object.assign({},this.loginForm.value)
      this.userService.addCustomer(loginModel).subscribe(
        next => {
          this.alertifyService.success("Customer is Added!");

        },
        error => {
          this.alertifyService.error("Failed to add customer!");
        }
      )
    }
  }

  

}
