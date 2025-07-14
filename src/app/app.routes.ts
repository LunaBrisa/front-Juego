import { Routes, Route } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { Inicio } from './pages/inicio/inicio';
import { WelcomeComponent } from './pages/welcome/welcome';
import { Batalla } from './pages/batalla/batalla';
import { Torneos } from './pages/torneos/torneos';
import { Partida } from './pages/partida/partida';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'inicio', component: Inicio },
  { path: 'batalla', component: Batalla },
  { path: 'torneo', component: Torneos },
  { path: 'partida', component: Partida },
];
