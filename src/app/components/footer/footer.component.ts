import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <footer>
      <div class="logito">
      <a class="logo" href=""><img src="icons/accion-popular-black.svg" alt=""></a></div>
      <main>
      <div class="redes-sociales">
        <p>Siguenos:</p>
        <ul>
          <li><a href=""><img src="icons/tiktok.svg" alt=""></a></li>
          <li><a href=""><img src="icons/facebook.svg" alt=""></a></li>
          <li><a href=""><img src="icons/twitter.svg" alt=""></a></li>
          <li><a href=""><img src="icons/instagram.svg" alt=""></a></li>
          <li><a href=""><img src="icons/youtube.svg" alt=""></a></li>
        </ul>
      </div>
      <div class="mapa-web">
        <p>Mapa Web</p>
        <ul>
          <li><a href="">Nosotros</a></li>
          <li><a href="">Normativa</a></li>
          <li><a href="">ONRP</a></li>
          <li><a href="">Actualidad</a></li>
          <li><a href="">Únete a nosotros</a></li>
        </ul>
      </div>
      <div class="enlaces-importantes">
        <p>Enlaces Importantes</p>
        <ul>
          <li><a href="">Jurado Nacional de Elecciones</a></li>
          <li><a href="">ONPE</a></li>
          <li><a href="">Presidencia</a></li>
          <li><a href="https://www.congreso.gob.pe/">Congreso de la republica</a></li>
        </ul>
      </div></main>
    </footer>
  `,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {

}
