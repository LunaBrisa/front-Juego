import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  name: string = '';
  email: string = '';
  edad: string = '';
  genero: string = '';
  password: string = '';

  validationErrors: { field: string; message: string }[] = [];

  constructor(private userService: UserService, private router: Router) { }

  onRegister() {
    const data = {
      name: this.name,
      email: this.email,
      edad: this.edad,
      genero: this.genero,
      password: this.password
    };

    this.userService.register(data).subscribe({
      next: (res) => {
        alert('Registro exitoso');
        this.router.navigate(['/welcome']);
      },
      error: (error) => {
        console.error('Error en registro', error);
        if (error.status === 422) {
          this.validationErrors = error.error.errors;
        } else {
          alert('Ocurrió un error inesperado');
        }
      }
    });
  }

  getErrorFor(field: string): string | null {
    const error = this.validationErrors.find(err => err.field === field);
    return error ? error.message : null;
  }
}
