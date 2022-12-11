import { Component, OnInit } from '@angular/core';
import { UsersJsonService } from '../serviceUsers/users-json.service';
import { user } from '../interface/usersInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles:['.form input{margin: 10px}, .form button {margin:5px; padding:5px}']
})
export class AddUserComponent implements OnInit {

  newUser: user = { name:'', email:''};
  constructor(private server : UsersJsonService, private router : Router) { }

  ngOnInit(): void {
  
  }

  // cuando click en el enviar habria q hacer una petición post 
  // si todo va bien usuario añadido 
  // si no error 

  addNewUser(){
    this.server.addUser(this.newUser).subscribe({
      next:(resp) =>{
        console.log(this.newUser)
        this.router.navigate(['/users']);
      },
      error: (error) =>{
        console.log('error')
        this.router.navigate(['/**'])
      }
    })




  }

}
