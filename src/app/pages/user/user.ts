import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { UserService } from '../../services/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  users: any[] = [];
  selectedUser: any = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.users = res.users;
      },
      error: (error) => {
        console.error('Error en obtención de usuarios', error);
      }
    });
  }

  onEdit(user: any) {
    this.selectedUser = { ...user };
  }

  cancelEdit() {
    this.selectedUser = null;
  }

  saveEdit() {
    this.userService.updateUser(this.selectedUser.id, this.selectedUser).subscribe({
      next: () => {
        console.log('Usuario actualizado');
        this.loadUsers(); 
        this.selectedUser = null; 
      },
      error: (error) => {
        console.error('Error al actualizar usuario', error);
      }
    });
  }

  onDelete(user: any) {
    if (confirm(`¿Seguro que quieres eliminar al usuario ${user.name}?`)) {
      this.userService.deleteUser(user.id).subscribe({
        next: () => {
          console.log('Usuario eliminado');
          this.loadUsers(); 
        },
        error: (error) => {
          console.error('Error al eliminar usuario', error);
        }
      });
    }
  }
}
