import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pilares',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <header>
    <h1 class="titulo">CONOCE NUESTROS PILARES</h1>
    <main>
      <div class="linea"></div>
      <div class="pilar">
        <h1>01</h1>
        <h3>TITULO DEL PILAR</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.</p>
      </div>
      <div class="pilar">
        <h1>02</h1>
        <h3>TITULO DEL PILAR</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.</p>
      </div>
      <div class="pilar">
        <h1>03</h1>
        <h3>TITULO DEL PILAR</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.</p>
      </div>
      <div class="pilar">
        <h1>04</h1>
        <h3>TITULO DEL PILAR</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.</p>
      </div>
      <div class="pilar">
        <h1>05</h1>
        <h3>TITULO DEL PILAR</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.</p>
      </div>
      <div class="pilar">
        <h1>06</h1>
        <h3>TITULO DEL PILAR</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.</p>
      </div>
    </main>
  </header>
  `,
  styleUrl: './pilares.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PilaresComponent { }
