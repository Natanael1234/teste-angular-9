import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { DrawerService } from 'src/app/services/drawer.service';

@Component({
  selector: 'nx-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios:UsuarioModel[] = [];
  carregando:boolean = false;

  constructor(public drawer: DrawerService, public albunsService: AlbumService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  async getUsuarios () {
    this.carregando = true;
    this.usuarios = await this.albunsService.getUsuarios();
    this.carregando = false;
  }

}
