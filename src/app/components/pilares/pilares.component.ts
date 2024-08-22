import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-pilares',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    <swiper-container init=false class="mySwiper">
        <swiper-slide *ngFor="let pilar of pilares">
          <div class="pilar">
            <h1>{{ pilar.numero }}</h1>
            <h3>{{ pilar.titulo }}</h3>
            <p>{{ pilar.descripcion }}</p>
          </div>
        </swiper-slide>
      </swiper-container>
  </header>
  `,
  styleUrl: './pilares.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PilaresComponent { 
  pilares = [
    { numero: '01', titulo: 'TITULO DEL PILAR', descripcion: 'Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.' },
    { numero: '02', titulo: 'TITULO DEL PILAR', descripcion: 'Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.' },
    { numero: '03', titulo: 'TITULO DEL PILAR', descripcion: 'Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.' },
    { numero: '04', titulo: 'TITULO DEL PILAR', descripcion: 'Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.' },
    { numero: '05', titulo: 'TITULO DEL PILAR', descripcion: 'Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.' },
    { numero: '06', titulo: 'TITULO DEL PILAR', descripcion: 'Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.' },
  ];

}
