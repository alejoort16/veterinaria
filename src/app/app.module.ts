import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import {SlideshowModule} from 'ng-simple-slideshow';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioCitaComponent } from './components/formulario-cita/formulario-cita.component';
import { FormularioRegistroUsuarioComponent } from './components/formulario-registro-usuario/formulario-registro-usuario.component';
import { ContenidoIndexComponent } from './components/contenido-index/contenido-index.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioCitaComponent,
    FormularioRegistroUsuarioComponent,
    ContenidoIndexComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,  SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
