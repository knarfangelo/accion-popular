import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { ICandidato } from './DB/ICandidato';
import { candidatosJSON } from './DB/candidatosJSON';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();
@Component({
  selector: 'app-nuestro-partido',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
  ],
  template: `
    <h4>Nuestro Partido</h4>
    <h1>Acción Popular</h1>
    <div>
      <button (click)="updateInfo(0)">Presidente</button>
      <button (click)="updateInfo(1)">Vicepresidente</button>
      <button (click)="updateInfo(2)">Secretario General</button>
      <button (click)="updateInfo(3)">Dirección Central</button>
      <button (click)="updateInfo(4)">Dirección Politica</button>
    </div>
    <main>
    <swiper-container init=false>
      @for (candidato of candidatos; track $index) {
      <swiper-slide><div class="slide-custom">
        <h1>{{candidato.nombre}}</h1>
        <h1>{{candidato.apellido}}</h1>
        <p>{{candidato.descripcion}}</p>
        <p></p>
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
  
  updateInfo(index: number) {

  }

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
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
  }


}
