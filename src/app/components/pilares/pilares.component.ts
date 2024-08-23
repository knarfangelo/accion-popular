import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
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
          <!-- Swiper Container -->
          <swiper-container init=false class="mySwiper swiper-pilares">
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
  swiperElements = signal<SwiperContainer | null>(null);
  swiperInstance: Swiper | null = null;
  pilares = [
    { numero: '01', titulo: 'TITULO DEL PILAR', descripcion: 'Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.' },
    { numero: '04', titulo: 'TITULO DEL PILAR', descripcion: 'Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.' },
    { numero: '02', titulo: 'TITULO DEL PILAR', descripcion: 'Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.' },
    { numero: '05', titulo: 'TITULO DEL PILAR', descripcion: 'Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.' },
    { numero: '03', titulo: 'TITULO DEL PILAR', descripcion: 'Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.' },
    { numero: '06', titulo: 'TITULO DEL PILAR', descripcion: 'Lorem ipsum dolor sit amet consectetur. Tristique malesuada bibendum proin placerat proin faucibus et.' },
  ];


  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-pilares') as SwiperContainer;
    const swiperOptions: SwiperOptions = {
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination:true,
      effect: 'slide',
      slidesPerView: 1,
      spaceBetween:20,
      grid: {
        rows: 3,
        fill: 'row',
      },
      speed: 1000,
    };

    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();

    // Obtener la instancia de Swiper después de inicializarla
    this.swiperInstance = swiperElemConstructor?.swiper as Swiper;
  }

}
