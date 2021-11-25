import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DataTablesModule } from 'angular-datatables';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CarsComponent, NavbarComponent, HomeComponent],
  imports: [
    BrowserModule,
    DataTablesModule,
    FormsModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'cars',
        component: CarsComponent,
      },
      {
        path: '**',
        component: HomeComponent,
      },
    ]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
