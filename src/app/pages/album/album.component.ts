import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { ImagemModel } from 'src/app/models/imagem.model';
import { AlbumModel } from 'src/app/models/album.model';


@Component({
  selector: 'nx-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  // usuario: UsuarioModel;
  album: AlbumModel;
  imagens: ImagemModel[];


  // carregandoUsuario = false;
  carregandoAlbum = false;
  carregandoImagens = false;

  erroUsuario;
  erroAlbum;
  erroImagens;

  constructor(public location: Location, public route: ActivatedRoute, public albumService: AlbumService) { }

  ngOnInit(): void {
    // this.getUsuario();
    this.getAlbum();
    this.getImagens();
  }

  // async getUsuario() {
  //   this.carregandoUsuario = true;
  //   let usuarioId = +this.route.snapshot.paramMap.get('usuarioId');
  //   this.usuario = await this.albumService.getUsuario(usuarioId);
  //   this.carregandoUsuario = false;
  // }

  async getAlbum() {
    this.carregandoAlbum = true;
    let albumId = +this.route.snapshot.paramMap.get('albumId');
    this.album = await this.albumService.getAlbum(albumId);
    this.carregandoAlbum = false;
  }

  async getImagens() {
    this.carregandoImagens = true;
    let albumId = +this.route.snapshot.paramMap.get('albumId');
    this.imagens = await this.albumService.getImagens(albumId);
    this.carregandoImagens = false;
  }

  async goBack () {
    this.location.back();
  }

}
