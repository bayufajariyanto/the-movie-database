import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './explore/home/home.component';
import { DetailComponent } from './explore/detail/detail.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RouterModule } from '@angular/router';
import { ListCardComponent } from '../shared/list-card/list-card.component';
import { DurationPipe } from '../core/pipes/duration.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    FavoriteComponent,
    ListCardComponent,
    DurationPipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule
  ]
})
export class PagesModule { }
