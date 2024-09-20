import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-juventudes',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <div class="cotenedor-img">
      <img [src]="imagen" [ngClass]="estilosImagen" alt=""></div>
      <main>
      <h1>{{nombre}}</h1>
      <p>{{cargo}}</p></main>
    </header>
  `,
  styleUrl: './cards-juventudes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsJuventudesComponent {

  @Input() imagen: string = 'NONE IMAGE PROVIDED';
  @Input() nombre: string = 'NONE NAME';
  @Input() cargo: string = 'NONE CARGO';
  @Input() estilosImagen: { [key: string]: string | number } = {};

}
