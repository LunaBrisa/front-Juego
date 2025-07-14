import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio implements AfterViewInit {
  private bubbleCount = 30;
  private particles: any[] = [];

  constructor(
  private router: Router ) {}


  ngAfterViewInit(): void {
    this.generateBubbles();
    this.generateOceanWaves();
    this.initSonarRadar();
  }

  private generateBubbles(): void {
    const container = document.querySelector('.bubbles');
    if (!container) return;

    container.innerHTML = '';

    for (let i = 0; i < this.bubbleCount; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      
      const size = Math.random() * 30 + 10;
      const left = Math.random() * 100;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 15;
      const opacity = Math.random() * 0.4 + 0.3;
      
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}%`;
      bubble.style.bottom = `-${size}px`;
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.animationDelay = `${delay}s`;
      bubble.style.opacity = `${opacity}`;
      
      container.appendChild(bubble);
    }
  }

  private generateOceanWaves(): void {
    const waveContainer = document.querySelector('.deep-ocean-waves');
    if (!waveContainer) return;

    // Crear olas adicionales para más profundidad
    for (let i = 0; i < 2; i++) {
      const wave = document.createElement('div');
      wave.classList.add('wave-layer');
      
      const height = 150 + (i * 50);
      const duration = 25 + (i * 5);
      const opacity = 0.2 + (i * 0.1);
      
      wave.style.height = `${height}px`;
      wave.style.animationDuration = `${duration}s`;
      wave.style.opacity = `${opacity}`;
      wave.style.backgroundSize = `${50 - (i * 10)}% ${height}px`;
      
      waveContainer.appendChild(wave);
    }
  }

  private initSonarRadar(): void {
    const radar = document.querySelector('.sonar-radar');
    if (!radar) return;

    // Crear anillos de radar adicionales
    for (let i = 0; i < 3; i++) {
      const ring = document.createElement('div');
      ring.classList.add('radar-ring');
      
      const size = 80 + (i * 40);
      const duration = 8 + (i * 2);
      const delay = i * 1.5;
      
      ring.style.width = `${size}vmax`;
      ring.style.height = `${size}vmax`;
      ring.style.animationDuration = `${duration}s`;
      ring.style.animationDelay = `${delay}s`;
      
      radar.appendChild(ring);
    }
  }

  // Opcional: Reiniciar animaciones al cambiar de ruta
  ngOnDestroy(): void {
    const container = document.querySelector('.bubbles');
    if (container) container.innerHTML = '';
  }

    irAPartida() {
    this.router.navigate(['/partida']);
  }
   irABatalla() {
    this.router.navigate(['/batalla']);
  }
    irATorneo() {
    this.router.navigate(['/torneo']);
  }
}