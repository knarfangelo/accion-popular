import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavegacionComponent } from "../navegacion/navegacion.component";

@Component({
  selector: 'app-fundacion',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    NavegacionComponent
],
  template: `
    <app-navegacion></app-navegacion>
    <article class="fundacion-article">
      <img class="banner" src="nosotros/accion-popular.png" alt="logo de accion popular">
      <h1>Quiénes Somos</h1>
      <p>Acción Popular ha sido, desde sus inicios, un pilar fundamental en la política peruana. Fundado en 1956 por Fernando Belaúnde Terry, un líder visionario, nuestro partido ha defendido los principios de democracia, participación ciudadana y descentralización.</p>
      <p>Con dos presidencias históricas, en 1963 y 1980, hemos impulsado la modernización del Perú, defendido la libertad de prensa, y promovido reformas sociales y económicas que mejoraron la calidad de vida de los peruanos. Nuestro compromiso con los valores democráticos sigue guiando cada una de nuestras acciones, siempre con la mirada puesta en un Perú más justo y equitativo.</p>
      <h1>Nuestros Valores</h1>
      <section class="cards">
        <div class="cartas">
          <h4>Democracia y Participación 
          Ciudadana</h4>
          <p>Creemos en un gobierno transparente y en el poder del pueblo para tomar decisiones</p>
          <img src="nosotros/1.png" alt="democracia y participación ciudadana">
        </div>
        <div class="cartas">
          <h4>Desarrollo Sostenible</h4>
          <p>Nuestro enfoque está en el crecimiento económico equilibrado con el respeto al medio ambiente.</p>
          <img src="nosotros/3.png" alt="democracia y participación ciudadana">
        </div>
        <div class="cartas">
          <h4>Justicia Social </h4>
          <p>Promovemos la igualdad de oportunidades y la reducción de las brechas sociales.</p>
          <img src="nosotros/2.png" alt="democracia y participación ciudadana">
        </div>
      </section>
    </article>

    <app-footer></app-footer>
  `,
  styleUrl: './fundacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FundacionComponent { }
