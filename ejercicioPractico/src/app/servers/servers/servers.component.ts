import { Component, OnInit } from '@angular/core';
import { ServidoresService } from '../serviceServers/servidores.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})

export class ServersComponent implements OnInit {

  constructor(private servers : ServidoresService) { }

  ngOnInit(): void {
  }


  //con este método obtengo todos los servidores que están en el array del sevicio
  get allServers(){
    
    return this.servers.servers;
  }


}
