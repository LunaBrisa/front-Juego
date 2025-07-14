import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent implements AfterViewInit {
  usuario = '';
  email = '';
  contrasena = '';
  confirmarContrasena = '';
  
    constructor(
    private router: Router ) {}

  register() {
    if (this.usuario && this.email && this.contrasena && this.confirmarContrasena) {
      console.log('Registro exitoso con:', this.usuario, this.email);
      // Aquí puedes redirigir o hacer el llamado al backend
    } else {
      console.log('Faltan datos');
    }
  }

  ngAfterViewInit(): void {
    this.generateStars();
    this.generateBubbles();
  }

  private generateStars(): void {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;

    const starCount = 80;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2 + 1;
      const opacity = Math.random() * 0.7 + 0.1;
      const duration = Math.random() * 4 + 2;
      
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = `rgba(229, 249, 248, ${opacity})`;
      star.style.animation = `twinkle ${duration}s infinite ease-in-out ${Math.random() * 5}s`;
      
      starsContainer.appendChild(star);
    }
  }

  private generateBubbles(): void {
    const bubblesContainer = document.querySelector('.bubbles');
    if (!bubblesContainer) return;

    const bubbleCount = 20;
    
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      
      const size = Math.random() * 40 + 10;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 15 + 10;
      
      bubble.style.left = `${left}%`;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.animation = `float ${duration}s infinite ${delay}s`;
      
      bubblesContainer.appendChild(bubble);
    }
  }

    irALogin() {
    this.router.navigate(['/login']);
  }
}