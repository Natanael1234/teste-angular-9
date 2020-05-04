import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoadingModule } from 'src/app/components/loading/loading.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [UsuariosComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MatListModule,
    MatRippleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LoadingModule,
    MatCardModule
  ]
})
export class UsuariosModule { }
