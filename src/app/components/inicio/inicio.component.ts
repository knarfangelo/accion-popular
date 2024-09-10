import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent
],
  template: `
    <app-navegacion></app-navegacion>
    <header>
      <img class="portada" src="inicio/portada.svg" alt="">
      <img class="foto" src="inicio/portada.jpg" alt="">
    </header>
  `,
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { }
