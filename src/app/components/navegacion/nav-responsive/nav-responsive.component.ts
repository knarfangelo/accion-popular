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
      <img src="icons/burguer.svg" alt="">
      <img src="inicio/portada.svg" alt="">
      <a href="">Únete</a>
    </nav>
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
