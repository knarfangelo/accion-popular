import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Renderer2, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { INoticias } from './DB/INoticias';
import { noticiasJSON } from './DB/noticiasJSON';
import { register, SwiperContainer } from 'swiper/element';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
register()
@Component({
  selector: 'app-noticias',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
  ],
  template: ` 
    <header>
  <h1>Últimas Noticias de Acción Popular</h1>
  <main>
    @for (item of items; track $index) {
    <article>
      <a [href]="item.url" target="_blank">
      <img [src]="item.img" alt="">
      <p>{{item.date}}</p>
      <h3>{{item.title}}</h3>
      <p>{{item.description}}</p>
      </a>
    </article>
    }
  </main>
  <swiper-container init="false" class="mySwiper swiper-noticias" pagination="true">
    @for (noticia of items; track $index) { 
     
    <swiper-slide>
       <a [href]="noticia.url" target="_blank"><article>
       <img [src]="noticia.img" alt="">
        <p>{{noticia.date}}</p>
        <h3>{{noticia.title}}</h3>
        <p>{{noticia.description}}</p>
      </article></a>
    </swiper-slide>}
  </swiper-container>    
</header>

  `,
  styleUrl: './noticias.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticiasComponent { 

  items: INoticias[] = noticiasJSON;
  swiperElements = signal<SwiperContainer | null>(null);
  swiperInstance: Swiper | null = null;

  updateInfo(index: number) {
    // Esperar a que swiperInstance esté inicializado
    if (this.swiperInstance) {
      this.swiperInstance.slideTo(index);
    }
  }

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-noticias') as SwiperContainer;
    const swiperOptions: SwiperOptions = {
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      fadeEffect: {
        crossFade: true
      },
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween:20,
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
