import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { NavResponsiveComponent } from "./nav-responsive/nav-responsive.component";
import { INavegacion } from './DB/INavegacion';
import { navegacionJSON } from './DB/navegacionJSON';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [
    CommonModule,
    NavResponsiveComponent
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
        <ng-content></ng-content>
        <li><a href="">INICIO</a></li>
        <li><a href="nosotros">NOSOTROS</a></li>
        <li><a href="normativa">NORMATIVA</a></li>
        <li><a href="juventud">JUVENTUDES</a></li>
        <li><a href="actualidad">ACTUALIDAD</a></li>
        <li class="unete"><a href="unete-a-nosotros">UNETE A NOSOTROS</a></li>
      </ul>
    </nav>
      <app-nav-responsive></app-nav-responsive>
  `,
  styleUrl: './navegacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionComponent { 
  @Input() campos:INavegacion[] = navegacionJSON;
 }
