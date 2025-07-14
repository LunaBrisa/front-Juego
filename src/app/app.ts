import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {
  protected title = 'FLOTA NAVAL';

  ngAfterViewInit(): void {
    this.generateStars();
    this.generateBubbles();
  }

  private generateStars(): void {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;

    const starCount = 100;
    
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

    const bubbleCount = 30;
    
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
}