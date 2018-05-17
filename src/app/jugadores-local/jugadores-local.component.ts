import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jugadores-local',
  templateUrl: './jugadores-local.component.html',
  styleUrls: ['./jugadores-local.component.css']
})
export class JugadoresLocalComponent implements OnInit {

  @Input() jugadores; 
  @Output() gol = new EventEmitter();
  @Output() amarilla = new EventEmitter();
  @Output() roja = new EventEmitter();

  alineacion;

  constructor() { }

  ngOnInit() {
    this.alineacion = this.jugadores.concat()
  }

  masGoles(nombre, g) {
    this.jugadores.forEach(jugador => {
      if (jugador.nombre === nombre) {
        jugador.goles = jugador.goles + g;
      }
    });
  }

  masAmarillas(nombre,t) {
    this.jugadores.forEach(jugador => {
      if (jugador.nombre === nombre) {
        jugador.amarillas = jugador.amarillas + t;
      }
      if (jugador.nombre === nombre && jugador.amarillas >=2) {
        jugador.rojas = 1;
        jugador.incidencias = "EXPULSADO";
      }
    });
  }

  masRojas(nombre,t) {
    this.jugadores.forEach(jugador => {
      if (jugador.nombre === nombre) {
        jugador.rojas = jugador.rojas + t;
      }
      if (jugador.nombre === nombre && jugador.rojas >= 1) {
        document.getElementsByClassName("nombre")
        jugador.incidencias = "EXPULSADO";
      }
    });
  }

  detectar(g) { 
    this.gol.emit(g);
  }

  detectTarjeta (t) {
    this.amarilla.emit(t);
    this.roja.emit(t);
  }

}
