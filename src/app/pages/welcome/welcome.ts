import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})
export class WelcomeComponent implements AfterViewInit {
  private ctx: CanvasRenderingContext2D | null = null;
  private particles: any[] = [];

  constructor(
    private elRef: ElementRef,
  private router: Router ) {}

  ngAfterViewInit(): void {
    this.initStarsCanvas();
    this.generateBubbles();
  }

  private initStarsCanvas(): void {
    const canvas = this.elRef.nativeElement.querySelector('#stars') as HTMLCanvasElement;
    if (!canvas) return;

    this.ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particleCount = 120;
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.6 + 0.4,
        speed: Math.random() * 0.8 + 0.3,
        twinkle: Math.random() * 0.05
      });
    }

    this.animateStars();
  }

  private animateStars(): void {
    if (!this.ctx || !this.ctx.canvas) return;

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.particles.forEach(p => {
      this.ctx!.beginPath();
      this.ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      p.opacity = Math.max(0.4, p.opacity + Math.sin(Date.now() * p.twinkle) * 0.2);
      this.ctx!.fillStyle = `rgba(229, 249, 248, ${p.opacity})`;
      this.ctx!.fill();

      p.y -= p.speed;
      if (p.y < 0) p.y = this.ctx!.canvas.height;
    });

    requestAnimationFrame(() => this.animateStars());
  }

  private generateBubbles(): void {
    const bubblesContainer = this.elRef.nativeElement.querySelector('.bubbles');
    if (!bubblesContainer) return;

    const bubbleCount = 25;
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      const size = Math.random() * 35 + 15;
      const left = Math.random() * 100;
      const delay = Math.random() * 4;
      const duration = Math.random() * 10 + 6;

      bubble.style.left = `${left}%`;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.animation = `float ${duration}s infinite ${delay}s ease-in-out`;
      bubblesContainer.appendChild(bubble);
    }
  }

   irALogin() {
    this.router.navigate(['/login']);
  }
   irARegistro() {
    this.router.navigate(['/register']);
  }
}
