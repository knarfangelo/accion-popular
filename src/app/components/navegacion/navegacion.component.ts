import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <nav class="navegacion-redes">
      <ul class="lista-redes">
        <li><a href="">
          <img src="icons/tiktok.svg" alt="">
        </a></li>
        <li><a href="">
          <img src="icons/facebook.svg" alt="">
        </a></li>
        <li><a href="">
          <img src="icons/twitter.svg" alt="">
        </a></li>
        <li><a href="">
          <img src="icons/instagram.svg" alt="">
        </a></li>
        <li><a href="">
          <img src="icons/youtube.svg" alt="">
        </a></li>
        <li class="correo"><a href="">
          <img src="icons/correo.svg" alt="">
          <p>info&#64;accionpopular.com.pe</p>
        </a></li>
      </ul>

    </nav>
    <nav class="navegacion-paginas">
    <ul class="lista-paginas">
        <li><a href="">Inicio</a></li>
        <li><a href="">Nosotros</a></li>
        <li><a href="">Noticias</a></li>
        <li><a href="">Juventudes</a></li>
        <li><a href="">Transparencia</a></li>
        <li><a href="">Voluntariado</a></li>
        <li class="unete"><a href="">Unete a nosotros</a></li>
      </ul></nav>
  `,
  styleUrl: './navegacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionComponent { }
