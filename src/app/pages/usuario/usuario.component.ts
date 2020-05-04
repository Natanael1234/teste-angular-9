import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AlbumService } from 'src/app/services/album.service';
import { ActivatedRoute } from '@angular/router';
import { AlbumModel } from 'src/app/models/album.model';


@Component({
  selector: 'nx-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  carregandoUsuario = false;
  carregandoAlbuns = false;

  erroUsuario: string;
  erroAlbuns: string;

  usuario: UsuarioModel;
  albuns: AlbumModel[];

  constructor(public route: ActivatedRoute, public location: Location, public albumService: AlbumService) { }

  ngOnInit(): void {
    this.getUsuario();
    this.getAlbunsUsuario();
  }

  async getUsuario() {
    this.carregandoUsuario = true;
    let usuarioId = +this.route.snapshot.paramMap.get('usuarioId');
    this.usuario = await this.albumService.getUsuario(usuarioId);
    this.carregandoUsuario = false;

  }

  async getAlbunsUsuario () {
    this.carregandoAlbuns = true;
    let usuarioId = +this.route.snapshot.paramMap.get('usuarioId');
    if (!usuarioId) {
      this.erroAlbuns = 'Usuário não especificado.';
    }
    this.albuns = await this.albumService.getAlbunsUsuario(usuarioId);
    this.carregandoAlbuns = false;
  }

}
