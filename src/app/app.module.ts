import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LocalComponent } from './local/local.component';
import { VisitanteComponent } from './visitante/visitante.component';
import { JugadoresLocalComponent } from './jugadores-local/jugadores-local.component';
import { JugadoresVisitanteComponent } from './jugadores-visitante/jugadores-visitante.component';


@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    VisitanteComponent,
    JugadoresLocalComponent,
    JugadoresVisitanteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
