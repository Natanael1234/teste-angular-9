import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './menu-lateral.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MenuLateralComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatRippleModule,
    MatIconModule
  ],
  exports: [MenuLateralComponent]
})
export class MenuLateralModule {

}
