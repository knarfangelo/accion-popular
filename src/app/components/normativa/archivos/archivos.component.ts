import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-archivos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <section class="contenido">
      <img src="icons/pala.webp" alt="">
      <p>{{titulo}}</p>
      </section>
      <section class="botones">
        <button>DESCARGAR</button>
        <button>VISUALIZAR</button>
      </section>
    </header>
  `,
  styleUrl: './archivos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchivosComponent { 

   @Input() titulo = '';

}

