import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { ICandidato } from './DB/ICandidato';
import { candidatosJSON } from './DB/candidatosJSON';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { Swiper, SwiperOptions } from 'swiper/types';
register();
@Component({
  selector: 'app-nuestro-partido',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
  ],
  template: `
  <div class="titulos">
    <h4>Nuestro Partido</h4>
    <h1>Acción Popular</h1></div>
    <div class="buttons">
      <button class="button-nav" (click)="updateInfo(0)">Presidente</button>
      <button class="button-nav" (click)="updateInfo(1)">Vicepresidente</button>
      <button class="button-nav" (click)="updateInfo(2)">Secretario General</button>
      <button class="button-nav" (click)="updateInfo(3)">Dirección Central</button>
      <button class="button-nav" (click)="updateInfo(4)">Dirección Politica</button>
    </div>
    <main>
    <swiper-container init=false>
      @for (candidato of candidatos; track $index) {
      <swiper-slide><div class="slide-custom">
        <img class="fondo-candidatos" src="candidatos/fondo-candidatos.webp" alt="">
        <div class="slide-info">
          <div class="candidatos">
          <h1>{{candidato.nombre}}</h1>
          <h1>{{candidato.apellido}}</h1>
          <div class="description">
          <p>{{candidato.descripcion}}</p>
          <p>{{candidato.descripcion2}}</p></div>
          <button class="slide-button">Leer Biografía</button></div>
          <div class="texto"><p>“Lorem ipsum dolor sit amet sit”</p><img class="foto" [src]="candidato.foto" alt=""></div>
            
        </div>
      </div>
      </swiper-slide>
    }
  </swiper-container>

    </main>
  `,
  styleUrl: './nuestro-partido.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuestroPartidoComponent {
  candidatos: ICandidato[] = candidatosJSON;
  swiperElements = signal<SwiperContainer | null>(null);
  swiperInstance: Swiper | null = null;

  updateInfo(index: number) {
    // Esperar a que swiperInstance esté inicializado
    if (this.swiperInstance) {
      this.swiperInstance.slideTo(index);
    }
  }

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('swiper-container');
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
      effect: 'fade'
    };

    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();

    // Obtener la instancia de Swiper después de inicializarla
    this.swiperInstance = swiperElemConstructor?.swiper as Swiper;
  }


}
