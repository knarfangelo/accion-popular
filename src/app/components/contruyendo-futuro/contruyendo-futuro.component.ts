import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contruyendo-futuro',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <h1>Construyendo el Futuro con Valores</h1>
      <main>
        <p>Bienvenidos al sitio oficial de Acción Popular, el partido de la democracia, la justicia social y el desarrollo sostenible. Desde nuestra fundación en 1956 por Fernando Belaúnde Terry, hemos sido protagonistas de la historia política del Perú, comprometidos con el bienestar de todos los peruanos.</p>
        <p class="explora">Explora nuestras propuestas, conoce nuestra historia y únete a nuestro proyecto de futuro.</p>
        <div class="buttons">
          <a href="unete-a-nosotros">Únete a nosotros</a>
          <a href="propuestas">Propuestas</a>
        </div>
      </main>
    </header>
  `,
  styleUrl: './contruyendo-futuro.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContruyendoFuturoComponent { }
