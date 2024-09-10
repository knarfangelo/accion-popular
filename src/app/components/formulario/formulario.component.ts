import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";
import { HttpClient } from '@angular/common/http';

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
    <app-navegacion>
    <li class="lista"><a class="icon-a" href=""><img class="icon-portada" src="/inicio/portada.svg" alt=""></a></li>
    </app-navegacion>
    <form class="formulario" action="">
      <h1>Bienvenido</h1>
      <p>Afíliate completando este formulario para ser parte de nuestro gran partido, y construyamos juntos el país que merecemos.</p>
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

      <label for="departamento"><span>Departamento</span>
        <select id="departamento" class="direccion" (change)="onDepartamentoChange($event)">
          <option value="">Selecciona departamento</option>
          <option *ngFor="let dep of departamentos" [value]="dep">{{dep}}</option>
        </select>
        <img class="map" src="icons/map.svg" alt="">
      </label>

      <label for="provincia"><span>Provincia</span>
        <select id="provincia" class="direccion" (change)="onProvinciaChange($event)">
          <option value="">Selecciona provincia</option>
          <option *ngFor="let prov of provincias" [value]="prov"  >{{prov}}</option>
        </select>
        <img class="map" src="icons/map.svg" alt="">
      </label>

      <label for="distrito"><span>Distrito</span>
        <select id="distrito" class="direccion">
          <option value="">Selecciona distrito</option>
          <option *ngFor="let dist of distritos" [value]="dist">{{dist}}</option>
        </select>
        <img class="map" src="icons/map.svg" alt="">
      </label>

      <div class="container">
      <h3>Dominicilio actual  </h3><div class="linea"></div></div>
      <label for="departamento"><span>Departamento</span>
        <select id="departamento" class="direccion" (change)="onDepartamentoChange($event)">
          <option value="">Selecciona departamento</option>
          <option *ngFor="let dep of departamentos" [value]="dep">{{dep}}</option>
        </select>
        <img class="map" src="icons/map.svg" alt="">
      </label>

      <label for="provincia"><span>Provincia</span>
        <select id="provincia" class="direccion" (change)="onProvinciaChange($event)">
          <option value="">Selecciona provincia</option>
          <option *ngFor="let prov of provincias" [value]="prov"  >{{prov}}</option>
        </select>
        <img class="map" src="icons/map.svg" alt="">
      </label>

      <label for="distrito"><span>Distrito</span>
        <select id="distrito" class="direccion">
          <option value="">Selecciona distrito</option>
          <option *ngFor="let dist of distritos" [value]="dist">{{dist}}</option>
        </select>
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
})
export class FormularioComponent {

  
  provincias: any[] = [];
  departamentos: any[] = [];
  distritos: any[] = [];
  provinciasOriginales: any[] = [];
  departamentosOriginales: any[] = [];
  selectedDepartamento: string = '';
  selectedProvincia: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('/db/provincias.json').subscribe(data => {
      this.provinciasOriginales = data.map(item => ({
        ...item,
        Departamento: this.decodeHtmlEntities(item.Departamento),
        Provincia: this.decodeHtmlEntities(item.Provincia),
        Distrito: this.decodeHtmlEntities(item.Distrito),
      }));

      this.updateDepartamentos();
    });
  }

  decodeHtmlEntities(html: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  updateDepartamentos() {
    this.departamentos = [...new Set(this.provinciasOriginales.map(p => p.Departamento))];
    console.log('Departamentos:', this.departamentos);
  }

  onDepartamentoChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedDepartamento = target.value;

    // Filtrar provincias según el departamento seleccionado
    const provinciasFiltradas = this.provinciasOriginales
      .filter(p => p.Departamento === this.selectedDepartamento)
      .map(p => p.Provincia);
      
    // Eliminar duplicados
    this.provincias = [...new Set(provinciasFiltradas)];
    console.log('Provincias:', this.provincias);
    
    // Limpiar selección de provincia y distrito
    this.selectedProvincia = '';
    this.distritos = [];
  }

  onProvinciaChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedProvincia = target.value;

    // Filtrar distritos según la provincia seleccionada
    const distritosFiltrados = this.provinciasOriginales
      .filter(p => p.Provincia === this.selectedProvincia)
      .map(p => p.Distrito);
    
    // Eliminar duplicados
    this.distritos = [...new Set(distritosFiltrados)];
    console.log('Distritos:', this.distritos);
  }

}
