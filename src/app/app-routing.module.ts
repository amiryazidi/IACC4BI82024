import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RESIDENCEComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { LoginComponent } from './login/login.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { DetailResComponent } from './detail-res/detail-res.component';

const routes: Routes = [
  {path:'product', component: HomeComponent},
  {path  : '', redirectTo : 'product', pathMatch : 'full'},  // route par defaut
  {path:'residence', component: RESIDENCEComponent},
  {path:'login', component: LoginComponent},
  {path:'addResidence', component: FormResidenceComponent},
  {path:'addResidence/:id', component: FormResidenceComponent},
  {path:'detail/:id', component: DetailResComponent},
  {path:'detailProd/:id', component: DetailProdComponent},
  {path : '**' , component : NotFoundComponent},   // not found



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
