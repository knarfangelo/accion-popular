import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav-responsive',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <nav>
      <button (click)="navegacion()"><img class="burguer" src="icons/burguer.svg" alt=""></button>
      <img class="inicio" src="inicio/portada.svg" alt="">
      <a href="">Únete</a>
    </nav>
    <main  [class.open]="nav">
      <ul class="navegacion">
        <li><button class="close" (click)="navegar()"><img src="icons/close.svg" alt=""></button></li>
        <li><img class="logo" src="inicio/portada.svg" alt=""></li>
        <li><a href="">Inicio</a></li>
        <li><a href="fundacion">Nosotros</a></li>
        <li><a href="normativa">Normativa</a></li>
        <li><a href="">ONRP</a></li>
        <li><a href="actualidad">Actualidad</a></li>
        <li class="unete"><a href="unete-a-nosotros">Unete a nosotros</a></li>
      </ul>
      <div class="background"></div>
      </main>
  `,
  styleUrl: './nav-responsive.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavResponsiveComponent { 
  nav = false;
  navegacion() {
    this.nav = !this.nav;
  }
  navegar(){
    this.nav = false;
  }
 }
