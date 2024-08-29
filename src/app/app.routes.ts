import { Routes } from '@angular/router';
import { AccionPopularComponent } from './components/accion-popular/accion-popular.component';
import { FundacionComponent } from './components/inicio/fundacion/fundacion.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NormativaComponent } from './components/normativa/normativa.component';
import { ActualidadComponent } from './components/actualidad/actualidad.component';
import { Error404Component } from './components/error404/error404.component';

export const routes: Routes = [
    {path: '', component: AccionPopularComponent},
    {path: 'fundacion', component: FundacionComponent},
    {path: 'unete-a-nosotros', component: FormularioComponent},
    {path: 'normativa', component:NormativaComponent},
    {path: 'actualidad', component: ActualidadComponent},
    {path: '**', component: Error404Component}
];
