import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RESIDENCEComponent } from './residence/residence.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { LoginComponent } from './login/login.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailResComponent } from './detail-res/detail-res.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RESIDENCEComponent,
    NavbarComponent,
    NotFoundComponent,
    DetailProdComponent,
    LoginComponent,
    FormResidenceComponent,
    DetailResComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
