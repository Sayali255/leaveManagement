import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 ApiUrl:string = 'https://leavemanagement-a26f5-default-rtdb.firebaseio.com/users-details.json'

  constructor(private http:HttpClient) { }

  onUsersLogin(data:any){
    console.log(data);

    // this.http.post(this.ApiUrl, data)
  }
}
