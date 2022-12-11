import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from './users/users/users.component';
import { ServersComponent } from './servers/servers/servers.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AddUserComponent } from './users/add-user/add-user.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },

    {
        path: 'users', 
        component: UsersComponent
    },
    {
        path:'servers',
        component: ServersComponent
    },
    {
        path:'addUser',
        component: AddUserComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

    @NgModule({
        imports: [
            RouterModule.forRoot( routes )
        ],
        exports: [
            RouterModule
        ]
    })

    export class AppRoutingModule {}