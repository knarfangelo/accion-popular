import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bancada',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <img src="bancada/bancada-logo.svg" alt="">
      <main>
        <h3>Nuestra Bancada</h3>
        <p>Conoce aquí a tus representantes de Acción Popular en el Congreso</p>
        <a href="">Ver más</a>
      </main>
    </header>
  `,
  styleUrl: './bancada.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BancadaComponent { }
