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
    <header>
      <app-navegacion></app-navegacion>
      <main>
      <img class="portada" src="inicio/portada.svg" alt="">
      <img class="foto" src="inicio/foto.png" alt="">
      </main>
    </header>
  `,
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { }
