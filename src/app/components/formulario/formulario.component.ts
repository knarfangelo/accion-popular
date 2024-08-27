import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent
],
  template: `

  <header>
    <app-navegacion></app-navegacion>
    <form class="formulario" action="">
      <h1>Bienvenido</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam officia consequatur exercitationem. Illum sequi omnis vitae officia cupiditate exercitationem</p>
      <label for="" class="nombres"><span>Nombres</span>
        <input type="text" placeholder="Tus nombres">
      </label>
      <label for="" class="apellidos"><span>Apellidos</span>
        <input type="text" placeholder="Tus apellidos">
      </label>
      <label for=""><span>Correo electronico</span>
        <input type="email" placeholder="ejemplo@gmail.com">
        <img src="icons/email.svg" alt="">
      </label>
      <label for=""><span>DNI</span>
        <input type="number" placeholder="78896610">
        <img src="icons/dni.svg" alt="">
      </label>
      <label for="fecha"><span>Fecha de Nacimiento</span>
        <input type="date" id="fecha" placeholder="DD/MM/AAAA">
      </label>
      <div class="container">
      <h3>Lugar de nacimiento </h3><div class="linea"></div></div>
      <label for=""><span>Departamento</span>
        <input class="direccion" type="text" placeholder="Selecciona departamento">
        <img class="map" src="icons/map.svg" alt="">
      </label>
      <label for=""><span>Provincia</span>
        <input class="direccion" type="text" placeholder="Selecciona provincia">
        <img class="map" src="icons/map.svg" alt="">
      </label>
      <label for=""><span>Distrito</span>
        <input class="direccion" type="text" placeholder="Selecciona distrito">
        <img class="map" src="icons/map.svg" alt="">
      </label>
      <div class="container">
      <h3>Dominicilio actual  </h3><div class="linea"></div></div>
      <label for=""><span>Departamento</span>
        <input class="direccion" type="text" placeholder="Selecciona departamento">
        <img class="map" src="icons/map.svg" alt="">
      </label>
      <label for=""><span>Provincia</span>
        <input class="direccion" type="text" placeholder="Selecciona provincia">
        <img class="map" src="icons/map.svg" alt="">
      </label>
      <label for=""><span>Distrito</span>
        <input class="direccion" type="text" placeholder="Selecciona distrito">
        <img class="map" src="icons/map.svg" alt="">
      </label>
      <label class="checkbox" for=""><input type="checkbox">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque labore ab temporibus earum architecto quis accusantium similique facilis</p>
      </label>
      <input class="submit" type="submit" value="Enviar">
    </form>
    <app-footer></app-footer>
  </header>
  
  `,
  styleUrl: './formulario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioComponent { }
