import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpModule } from '@angular/http'

// Rutas
import { app_routing } from "./app.routes"


// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiceService } from './services/service.service';
import { CentrosComponent } from './components/centros/centros.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ContentComponent } from './components/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CentrosComponent,
    CursosComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
