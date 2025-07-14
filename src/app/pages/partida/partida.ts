import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-partida',
  imports: [],
  templateUrl: './partida.html',
  styleUrl: './partida.css'
})
export class Partida {

    constructor(
  private router: Router ) {}


// Variable para controlar la visibilidad del modal
showModal: boolean = true; // Cambia a false si quieres que empiece oculto

// Función para unirse al juego
joinGame() {
  console.log('Uniéndose a la partida...');
  // Aquí tu lógica para unirse al juego
  this.showModal = false;
}

// Función para cerrar el modal
closeModal() {
  console.log('Cerrando modal...');
  this.showModal = false;
}
  irABatalla() {
    this.router.navigate(['/batalla']);
  }
    irAInicio() {
    this.router.navigate(['/inicio']);
  }


}
