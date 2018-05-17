import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  jugadores:object[] = [
    {nombre:"Simon Mignolet", dorsal:"22", goles:0, amarillas:0, rojas:0, imagen:"assets/mignolet.png", incidencias:""},
    {nombre:"Dejan Lovren", dorsal:"6", goles:0, amarillas:0, rojas:0, imagen:"assets/lovren.png", incidencias:""},
    {nombre:"Joseph Gomez", dorsal:"12", goles:0, amarillas:0, rojas:0, imagen:"assets/gomez.png", incidencias:""},
    {nombre:"Alberto Moreno", dorsal:"18", goles:0, amarillas:0, rojas:0, imagen:"assets/moreno.png", incidencias:""},
    {nombre:"Joel Matip", dorsal:"32", goles:0, amarillas:0, rojas:0, imagen:"assets/matip.png", incidencias:""},
    {nombre:"Georginio Wijnaldum", dorsal:"5", goles:0, amarillas:0, rojas:0, imagen:"assets/wijnaldum.png", incidencias:""},
    {nombre:"Alex Oxlade-Chamberlain", dorsal:"21", goles:0, amarillas:0, rojas:0, imagen:"assets/oxlade.png", incidencias:""},
    {nombre:"Jordan Henderson", dorsal:"14", goles:0, amarillas:0, rojas:0, imagen:"assets/henderson.png", incidencias:""},
    {nombre:"Emre Can", dorsal:"23", goles:0, amarillas:0, rojas:0, imagen:"assets/can.png", incidencias:""},
    {nombre:"Roberto Firmino", dorsal:"9", goles:0, amarillas:0, rojas:0, imagen:"assets/firmino.png", incidencias:""},
    {nombre:"Mohamed Salah", dorsal:"11", goles:0, amarillas:0, rojas:0, imagen:"assets/salah.png", incidencias:""},
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
