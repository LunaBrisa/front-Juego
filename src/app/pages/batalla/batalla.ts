import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batalla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batalla.html',
  styleUrls: ['./batalla.css']
})
export class Batalla {
  // Rango de celdas para 8x8
  rows = Array(8).fill(0).map((_, i) => i);
  cols = Array(8).fill(0).map((_, i) => i);
}