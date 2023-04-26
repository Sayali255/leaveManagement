import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/shared/services/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  faUser = faUser;
  faLock = faLock;
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder, private _usersService:UsersService){}

  ngOnInit(): void {
   this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    // console.log(this.loginForm);
    if(this.loginForm.valid){
    this._usersService.onUsersLogin(this.loginForm.value)
   }
  }

  get f(){
    return this.loginForm.controls;
  }
}
