import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './explore/home/home.component';
import { DetailComponent } from './explore/detail/detail.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    FavoriteComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule
  ]
})
export class PagesModule { }
