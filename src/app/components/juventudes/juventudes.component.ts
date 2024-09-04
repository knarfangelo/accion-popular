import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-juventudes',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent
],
  template: `
   <app-navegacion>
    <li class="lista"><a class="icon-a" href=""><img class="icon-portada" src="/inicio/portada.svg" alt=""></a></li>
    </app-navegacion>
    
    <app-footer></app-footer>
  `,
  styleUrl: './juventudes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JuventudesComponent { }
