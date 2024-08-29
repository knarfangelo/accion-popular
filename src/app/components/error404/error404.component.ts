import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent
],
  template: `
  <header>
    <app-navegacion>
      <li class="lista"><a class="icon-a" href=""><img class="icon-portada" src="/inicio/portada.svg" alt=""></a></li>
    </app-navegacion>
    <main>
      Error 404 <br>
     <p>Página no encontrada</p> 
    </main>
    <app-footer></app-footer>
  </header>
  `,
  styleUrl: './error404.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404Component { }
