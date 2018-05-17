import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitante',
  templateUrl: './visitante.component.html',
  styleUrls: ['./visitante.component.css']
})
export class VisitanteComponent implements OnInit {

  jugadores:object[] = [
    {nombre:"David de Gea", dorsal:"1", goles:0, amarillas:0, rojas:0, imagen:"assets/gea.png", incidencias:""},
    {nombre:"Phil Jones", dorsal:"4", goles:0, amarillas:0, rojas:0, imagen:"assets/jones.png", incidencias:""},
    {nombre:"Chris Smalling", dorsal:"12", goles:0, amarillas:0, rojas:0, imagen:"assets/smalling.png", incidencias:""},
    {nombre:"Antonio Valencia", dorsal:"25", goles:0, amarillas:0, rojas:0, imagen:"assets/valencia.png", incidencias:""},
    {nombre:"Matteo Darmian", dorsal:"36", goles:0, amarillas:0, rojas:0, imagen:"assets/darmian.png", incidencias:""},
    {nombre:"Ashley Young", dorsal:"18", goles:0, amarillas:0, rojas:0, imagen:"assets/young.png", incidencias:""},
    {nombre:"Ander Herrera", dorsal:"21", goles:0, amarillas:0, rojas:0, imagen:"assets/herrera.png", incidencias:""},
    {nombre:"Jesse Lingard", dorsal:"14", goles:0, amarillas:0, rojas:0, imagen:"assets/lingard.png", incidencias:""},
    {nombre:"Nemanja Matic", dorsal:"31", goles:0, amarillas:0, rojas:0, imagen:"assets/matic.png", incidencias:""},
    {nombre:"Romelu Lukaku", dorsal:"9", goles:0, amarillas:0, rojas:0, imagen:"assets/lukaku.png", incidencias:""},
    {nombre:"Anthony Martial", dorsal:"11", goles:0, amarillas:0, rojas:0, imagen:"assets/martial.png", incidencias:""},
  ]

  goles:number = 0; 
  amarillas:number = 0;
  rojas:number = 0;

  constructor() { }

  ngOnInit() {
  }

  recibeGoles(event) {
    this.goles = this.goles + event;
  }

  recibeAmarillas(event) {
    this.amarillas = this.amarillas + event;
  }

  recibeRojas(event) {
    this.rojas = this.rojas + event;
  }

}
