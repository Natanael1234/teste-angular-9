import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'albuns/:usuarioId/:albumId', loadChildren: () => import('./pages/album/album.module').then(m => m.AlbumModule) },
  { path: 'usuarios', loadChildren: () => import('./pages/usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: 'usuarios/:usuarioId', loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioModule) },
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'contato', loadChildren: () => import('./pages/contato/contato.module').then(m => m.ContatoModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
