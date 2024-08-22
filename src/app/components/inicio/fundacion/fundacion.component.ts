import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { NavegacionComponent } from "../../navegacion/navegacion.component";

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
  <header>
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c620948dcf7cc7b3fa1362b76feea67dd2d9c2f63d9d9bfe84c99b8ee63f53?placeholderIfAbsent=true&apiKey=300be4882adc46d38b84c094090c0f8c" alt="Fundación Acción Popular banner" class="banner-image">
    <h1 class="main-title">Fundación</h1>
  </header>

  <section class="introduction">
    <p>
      Acción Popular es un partido político peruano que ha jugado un papel crucial en la historia política del Perú desde su fundación en 1956. Fue establecido el 7 de julio de ese año por Fernando Belaúnde Terry, quien posteriormente se convertiría en una figura central en la política peruana y en el presidente del país en dos ocasiones.
    </p>
    <h2 class="section-title">Contexto de Fundación</h2>
    <p>
      La fundación de Acción Popular se sitúa en un período convulso de la historia peruana. Durante la década de 1950, el país estaba bajo la dictadura militar de Manuel A. Odría, un régimen que había comenzado en 1948 y que se caracterizó por la represión política, la falta de libertades civiles y un enfoque desarrollista centralista que no incluía a las masas populares. Fernando Belaúnde Terry, un arquitecto, académico y defensor de la democracia, se convirtió en un crítico abierto de este régimen.
    </p>
    <p>
      En este contexto, Belaúnde reunió a un grupo de jóvenes intelectuales, profesionales, estudiantes y ciudadanos comunes que compartían su vision de un Perú democrático y socialmente justo. Así nació Acción Popular, un partido que se propuso no solo como una fuerza política sino también como un movimiento de renovación y cambio en la sociedad peruana.
    </p>
  </section>

  <section class="ideology-principles">
    <div class="content-wrapper">
      <div class="text-content">
        <h2 class="section-title">Ideología y Principios</h2>
        <p>
          Acción Popular se constituyó con una plataforma ideológica que mezclaba el nacionalismo, el desarrollismo y la defensa de la democracia. Uno de sus lemas más conocidos, "El Perú como doctrina", sintetiza su enfoque: un nacionalismo que no se basa en la exclusión, sino en la integración de todos los peruanos en un proyecto común de desarrollo.
        </p>
        <p>El partido abogaba por una serie de principios fundamentales:</p>
        <ol>
          <li>Democracia y Libertades Civiles: Acción Popular siempre se ha manifestado en defensa de la democracia y las libertades individuales. Fue una respuesta directa al autoritarismo de la época.</li>
          <li>Descentralización y Desarrollo Regional: Desde su fundación, el partido promovió la descentralización del poder y el desarrollo de las regiones, oponiéndose al centralismo excesivo que predominaba en el Perú.</li>
          <li>Justicia Social y Equidad: El partido también defendió la necesidad de integrar a las masas populares en el desarrollo del país, promoviendo políticas que favorecieran la justicia social y la equidad.</li>
          <li>Protección del Medio Ambiente y Recursos Naturales: Fernando Belaúnde, con su formación de arquitecto, también impulsó una visión de desarrollo que consideraba la importancia de preservar los recursos naturales del Perú.</li>
        </ol>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a2b8c77b2d391a44100b1600ba0c7f8994c2c9d8d4efdfce0d058d8418a28cb?placeholderIfAbsent=true&apiKey=300be4882adc46d38b84c094090c0f8c" alt="Fernando Belaúnde Terry, fundador de Acción Popular" class="founder-image">
    </div>
  </section>

  <section class="evolution-legacy">
    <h2 class="section-title">Evolución y Legado</h2>
    <p>
      Acción Popular, tras la muerte de Fernando Belaúnde en 2002, ha experimentado diversas etapas de evolución, adaptándose a los cambios en el panorama político peruano. Aunque el partido ha tenido altibajos en términos de apoyo popular, ha mantenido una presencia continua en la política peruana.
    </p>
    <p>
      En años recientes, Acción Popular ha participado en diversas elecciones, tanto presidenciales como parlamentarias, y ha ocupado importantes cargos en el Congreso de la República. Su ideología sigue siendo un reflejo del legado de Belaúnde: una combinación de democracia, justicia social y desarrollo nacionalista.
    </p>
    <p>
      El partido ha sido parte de la formación política y social del Perú contemporáneo, y su influencia en la política peruana se extiende más allá de sus años en el poder, siendo un referente para futuras generaciones de políticos y ciudadanos comprometidos con el desarrollo del país.
    </p>
  </section>
</article>
    <app-footer></app-footer>
  `,
  styleUrl: './fundacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FundacionComponent { }
