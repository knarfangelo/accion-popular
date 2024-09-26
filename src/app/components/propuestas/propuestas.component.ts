import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-propuestas',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <section class="banner">
        <div class="fondo">
        <div class="filtro-rojo"></div>
        <img src="" alt=""></div>
        <h1>Nuestras Propuestas</h1>
        <img src="logo" alt="logo de accion popular">
      </section>

    </header>
  `,
  styleUrl: './propuestas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropuestasComponent { }
