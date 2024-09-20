import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";
import { archivosJSON } from '../normativa/archivos/DB/archivosJSON';
import { CardsJuventudesComponent } from "../../layouts/cards-juventudes/cards-juventudes.component";

@Component({
  selector: 'app-juventudes',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent,
    CardsJuventudesComponent
],
  template: `
  <header>
   <app-navegacion>
    <li class="lista"><a class="icon-a" href=""><img class="icon-portada" src="/inicio/portada.svg" alt=""></a></li>
    </app-navegacion>
    <div class="titulo">
      <img src="fundacion/banner-fundacion.webp" alt="">
      <p>COMÍTE EJECUTIVO NACIONAL</p>
    </div>
    <main>
    <app-cards-juventudes
    nombre="CHÁVEZ CHIONG, JULIO ABRAHAM"
    cargo="Presidente del partido"
    imagen="juventudes/chavez-chiong.png"
    ></app-cards-juventudes>
    <app-cards-juventudes
    nombre="CHÁVEZ CHIONG, JULIO ABRAHAM"
    cargo="Presidente del partido"
    imagen="juventudes/female.svg"
    [estilosImagen]="estilosRedondeado"
    ></app-cards-juventudes>
    <app-cards-juventudes
    nombre="CHÁVEZ CHIONG, JULIO ABRAHAM"
    cargo="Presidente del partido"
    imagen="juventudes/man.svg"
    ></app-cards-juventudes></main>
    <app-footer></app-footer></header>
  `,
  styleUrl: './juventudes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JuventudesComponent {

  estilosRedondeado = {
    'border-radius': '50%',
    'width': '150px !important',
    'height': '150px',
  };


}
