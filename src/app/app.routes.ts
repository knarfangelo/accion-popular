import { Routes } from '@angular/router';
import { AccionPopularComponent } from './components/accion-popular/accion-popular.component';
import { FundacionComponent } from './components/fundacion/fundacion.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NormativaComponent } from './components/normativa/normativa.component';
import { ActualidadComponent } from './components/actualidad/actualidad.component';
import { Error404Component } from './components/error404/error404.component';
import { ArticulosComponent } from './components/actualidad/articulos/articulos.component';
import { JuventudesComponent } from './components/juventudes/juventudes.component';
import { CardsJuventudesComponent } from './layouts/cards-juventudes/cards-juventudes.component';
import { PropuestasComponent } from './components/propuestas/propuestas.component';
import { JuventudesApComponent } from './components/juventudes-ap/juventudes-ap.component';
import { CapacitacionFormacionComponent } from './components/capacitacion-formacion/capacitacion-formacion.component';

export const routes: Routes = [
    {path: '', component: AccionPopularComponent},
    {path: 'nosotros', component: FundacionComponent},
    {path: 'unete-a-nosotros', component: FormularioComponent},
    {path: 'normativa', component:NormativaComponent},
    {path: 'juventud', component:JuventudesComponent},
    {path: 'actualidad', component: ActualidadComponent},
    {path: 'capacitacion', component: CapacitacionFormacionComponent},
    {path: 'juventud-accion-popular', component: JuventudesApComponent},
    {path: 'propuestas', component: PropuestasComponent},
    {path: 'articulos/:id', component: ArticulosComponent},
    {path: '**', component: Error404Component},
];
