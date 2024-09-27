import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InicioComponent } from "../inicio/inicio.component";
import { PilaresComponent } from "../pilares/pilares.component";
import { BancadaComponent } from "../bancada/bancada.component";
import { NoticiasComponent } from "../noticias/noticias.component";
import { NuestroPartidoComponent } from "../nuestro-partido/nuestro-partido.component";
import { FooterComponent } from "../footer/footer.component";
import { ContruyendoFuturoComponent } from "../contruyendo-futuro/contruyendo-futuro.component";

@Component({
  selector: 'app-accion-popular',
  standalone: true,
  imports: [
    CommonModule,
    InicioComponent,
    PilaresComponent,
    BancadaComponent,
    NoticiasComponent,
    NuestroPartidoComponent,
    FooterComponent,
    ContruyendoFuturoComponent
],
  template: `
    <app-inicio></app-inicio>
    <app-contruyendo-futuro></app-contruyendo-futuro>
    <app-bancada></app-bancada>
    <app-noticias></app-noticias>
    <app-nuestro-partido></app-nuestro-partido>
    <app-footer></app-footer>
  `,
  styleUrl: './accion-popular.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccionPopularComponent { }
