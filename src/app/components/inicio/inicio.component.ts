import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { register, SwiperContainer } from 'swiper/element';
import { Swiper, SwiperOptions } from 'swiper/types';

register();

@Component({
  selector: 'app-inicio',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    NavegacionComponent
],
  template: `
    <app-navegacion></app-navegacion>
    <swiper-container init=false class="swiper-inicio">
      <swiper-slide>
        <img class="foto" src="banners/panel2.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="foto" src="banners/panel1.png" alt="">
      </swiper-slide>
      
    </swiper-container>
  `,
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent {

  swiperElements = signal<SwiperContainer | null>(null);
  swiperInstance: Swiper | null = null;

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-inicio') as SwiperContainer;
    const swiperOptions: SwiperOptions = {
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      fadeEffect: {
        crossFade: true
      },
      slidesPerView: 1,
      speed: 1000,
      effect: 'slide'
    };

    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();

    // Obtener la instancia de Swiper después de inicializarla
    this.swiperInstance = swiperElemConstructor?.swiper as Swiper;
  }

}
