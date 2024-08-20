import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICandidato } from './DB/ICandidato';
import { candidatosJSON } from './DB/candidatosJSON';

@Component({
  selector: 'app-nuestro-partido',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <h4>Nuestro Partido</h4>
    <h1>Acción Popular</h1>
    <div>
      <button (click)="updateInfo(0)">Presidente</button>
      <button (click)="updateInfo(1)">Vicepresidente</button>
      <button (click)="updateInfo(2)">Secretario General</button>
      <button (click)="updateInfo(3)">Dirección Central</button>
      <button (click)="updateInfo(4)">Dirección Politica</button>
    </div>
    <main *ngIf="selectedCandidate">
      <article>
        <h1>{{ selectedCandidate.nombre }} {{ selectedCandidate.apellido }}</h1>
        <p>{{ selectedCandidate.descripcion }}</p>
        <button>Leer Biografia</button>   
      </article>
      <div>
        <p>{{ selectedCandidate.cargo }}</p>
        <img [src]="selectedCandidate.foto" alt="{{ selectedCandidate.nombre }}">
      </div>
    </main>
  `,
  styleUrl: './nuestro-partido.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuestroPartidoComponent {
  selectedCandidate: ICandidato | undefined;

  updateInfo(id: number) {
    this.selectedCandidate = candidatosJSON.find(candidate => candidate.id === id);
  }
}
