import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InicioComponent } from "../inicio/inicio.component";
import { PilaresComponent } from "../pilares/pilares.component";
import { BancadaComponent } from "../bancada/bancada.component";
import { NoticiasComponent } from "../noticias/noticias.component";
import { NuestroPartidoComponent } from "../nuestro-partido/nuestro-partido.component";

@Component({
  selector: 'app-accion-popular',
  standalone: true,
  imports: [
    CommonModule,
    InicioComponent,
    PilaresComponent,
    BancadaComponent,
    NoticiasComponent,
    NuestroPartidoComponent
],
  template: `
    <app-inicio></app-inicio>
    <app-pilares></app-pilares>
    <app-bancada></app-bancada>
    <app-noticias></app-noticias>
    <app-nuestro-partido></app-nuestro-partido>
  `,
  styleUrl: './accion-popular.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccionPopularComponent { }
