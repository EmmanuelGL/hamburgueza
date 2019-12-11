import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { TacosComponent } from "./tacos/tacos.component";
import { ContactosComponent } from "./contactos/contactos.component";
import { GaleriaComponent } from "./galeria/galeria.component";
import { AlitasComponent } from "./alitas/alitas.component";
import { HamburgesaComponent } from "./hamburgesa/hamburgesa.component";


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path:'Tacos', component: TacosComponent},
  {path:'Alitas', component: AlitasComponent},
  {path:'Hamburguesa',component:HamburgesaComponent},
  {path:'Contactos', component:ContactosComponent},
  {path:'Galeria', component: GaleriaComponent},
  // {path:'#QuienesSomos', component: HomeComponent},
  {path:'**', component: HomeComponent, pathMatch:'full',},
];




/*{ path: 'Login', component: LoginComponent },
  { path:'user' , component: UserComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
