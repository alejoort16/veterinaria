import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioCitaComponent } from './components/formulario-cita/formulario-cita.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioRegistroUsuarioComponent } from './components/formulario-registro-usuario/formulario-registro-usuario.component';
import { ContenidoIndexComponent } from './components/contenido-index/contenido-index.component';

const routes: Routes = [
  {
    path: 'formulario-cita',
    component: FormularioCitaComponent
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'formulario-registro',
    component: FormularioRegistroUsuarioComponent
},
{
    path: 'index',
    component: ContenidoIndexComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
