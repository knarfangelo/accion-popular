import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";
import { Swiper, SwiperOptions } from 'swiper/types';
import { register, SwiperContainer } from 'swiper/element';
register()
@Component({
  selector: 'app-actualidad',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent
],
  template: `
    <header>
      <app-navegacion>
      <li class="lista"><a class="icon-a" href=""><img class="icon-portada" src="/inicio/portada.svg" alt=""></a></li>
      </app-navegacion>
      <section class="news-section">
      <h2 class="section-title">Últimas Noticias de Acción Popular</h2>
      <div class="news-grid">
      <article class="news-item" *ngFor="let item of newsItems">
      <img [src]="item.imageUrl" [alt]="item.title" class="news-image" loading="lazy">
      <time class="news-date">{{item.date}}</time>
      <h3 class="news-title">{{item.title}}</h3>
      <p class="news-description">{{item.description}}</p>
      </article>
      </div>
      </section>
    <swiper-container init="false" class="mySwiper swiper-actualidad" pagination="true">
    @for (noticia of newsItems; track $index) {
    }
  </swiper-container>
      <app-footer></app-footer>
    </header>
  `,
  styleUrl: './actualidad.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActualidadComponent {
  swiperElements = signal<SwiperContainer | null>(null);
  swiperInstance: Swiper | null = null;
  newsItems = [
    {
      id: 1,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/86ce2d8a24a0843080b07ed1946c003ee0ce93dd167377afc649b5064e6013c3?placeholderIfAbsent=true&apiKey=300be4882adc46d38b84c094090c0f8c',
      date: '30.07.2024',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin sit cras nisl dictum aliquam aliquam ornare. Fermentum morbi in libero rutrum tempor tempus bibendum.'
    },
    {
      id: 2,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d768ffdba21567414904e40a100400d650ffb85a94f83a8ba39608a238f5bc48?placeholderIfAbsent=true&apiKey=300be4882adc46d38b84c094090c0f8c',
      date: '30.07.2024',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin sit cras nisl dictum aliquam aliquam ornare. Fermentum morbi in libero rutrum tempor tempus bibendum.'
    },
    {
      id: 3,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/48c8dbe0d52865469a85f03a6c79654582a7a537dcccc577e8a7c335c6ecff78?placeholderIfAbsent=true&apiKey=300be4882adc46d38b84c094090c0f8c',
      date: '30.07.2024',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin sit cras nisl dictum aliquam aliquam ornare. Fermentum morbi in libero rutrum tempor tempus bibendum.'
    },
    {
      id: 4,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5b7f164039a31d0a3d54fab42fb8bb1d641e8b4718d057a4e41f5b1f243372ef?placeholderIfAbsent=true&apiKey=300be4882adc46d38b84c094090c0f8c',
      date: '30.07.2024',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin sit cras nisl dictum aliquam aliquam ornare. Fermentum morbi in libero rutrum tempor tempus bibendum.'
    },
    {
      id: 5,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a0a450fd6cf09cccef618c8b7a305678b551deb708dc08cdf8a5efb3f4ad8094?placeholderIfAbsent=true&apiKey=300be4882adc46d38b84c094090c0f8c',
      date: '30.07.2024',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin sit cras nisl dictum aliquam aliquam ornare. Fermentum morbi in libero rutrum tempor tempus bibendum.'
    },
    {
      id: 6,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/790e00b126b46dddc5025825b53249b0b6f1d74b068a0830e95a3fa11028886f?placeholderIfAbsent=true&apiKey=300be4882adc46d38b84c094090c0f8c',
      date: '30.07.2024',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin sit cras nisl dictum aliquam aliquam ornare. Fermentum morbi in libero rutrum tempor tempus bibendum.'
    },
    {
      id: 7,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fe823f299db15d9f8025ab2c01165fe1d8639f98d9b2ba34868b3921c91399a7?placeholderIfAbsent=true&apiKey=300be4882adc46d38b84c094090c0f8c',
      date: '30.07.2024',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin sit cras nisl dictum aliquam aliquam ornare. Fermentum morbi in libero rutrum tempor tempus bibendum.'
    },
    {
      id: 8,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/92141fdbe73c48c85836029561aa8aeba174e535b48bc36f3024b20ab6d17942?placeholderIfAbsent=true&apiKey=300be4882adc46d38b84c094090c0f8c',
      date: '30.07.2024',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin sit cras nisl dictum aliquam aliquam ornare. Fermentum morbi in libero rutrum tempor tempus bibendum.'
    }
  ];

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-actualidad') as SwiperContainer;
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

