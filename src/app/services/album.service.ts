import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel as UsuarioModel } from '../models/usuario.model';
import { AlbumModel } from '../models/album.model';
import { ImagemModel } from '../models/imagem.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  urlBase = 'https://jsonplaceholder.typicode.com';

  constructor(public http: HttpClient) { }

  /**
   * Lista usuários.
   */
  async getUsuarios () : Promise<UsuarioModel[]> {
    let registros:any[] = await this.http.get(`${this.urlBase}/users` ).toPromise() as any[];
    return registros.map(reg=>{
      return new UsuarioModel(reg);
    });
  }

  async getUsuario(usuarioId: number): Promise<UsuarioModel> {
    let registro:any = await this.http.get(`${this.urlBase}/users/${usuarioId}`).toPromise() as any[];
    return new UsuarioModel(registro);
  }

  async getAlbuns () : Promise<AlbumModel[]> {
    let registros:any[] = await this.http.get(`${this.urlBase}/albums` ).toPromise() as any[];
    return registros.map(reg=>{
      return new AlbumModel(reg);
    });
  }

  async getImagens (albumId) : Promise<ImagemModel[]> {
    let registros:any[] = await this.http.get(`${this.urlBase}/photos?albumId=${albumId}` ).toPromise() as any[];
    return registros.map(reg=>{
      return new ImagemModel(reg);
    });
  }

  async getAlbum (albumId: number) : Promise<AlbumModel> {
    let registro: any = await this.http.get(`${this.urlBase}/albums/${albumId}`).toPromise() as any;
    return new AlbumModel(registro);
  }

  async getAlbunsUsuario (usuarioId:number) : Promise<AlbumModel[]> {
    let registros:any[] = await this.http.get(`${this.urlBase}/users/${usuarioId}/albums` ).toPromise() as any[];
    return registros.map(reg=>{
      return new AlbumModel(reg);
    });
  }

}
