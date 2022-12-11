import { Component, OnInit } from '@angular/core';
import { UsersJsonService } from '../serviceUsers/users-json.service';
import { user } from '../interface/usersInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: ['.addUser button{margin-top: 10px}'] 
})
export class UsersComponent implements OnInit {

  listUsers : user [] = [];

  constructor(private users : UsersJsonService,  private router : Router) { }

  ngOnInit(): void {

      this.users.searchUsers()
      .subscribe({
        next:(resp) => {
          console.log('next')
          this.listUsers = resp;
        },
        error: (error) => {
          console.log(error)
          this.router.navigate(['/**'])
        }
        
      })
  
  }

}
