import { Routes } from '@angular/router';
import { AccionPopularComponent } from './components/accion-popular/accion-popular.component';
import { FundacionComponent } from './components/inicio/fundacion/fundacion.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NormativaComponent } from './components/normativa/normativa.component';

export const routes: Routes = [
    {path: '', component: AccionPopularComponent},
    {path: 'fundacion', component: FundacionComponent},
    {path: 'unete-a-nosotros', component: FormularioComponent},
    {path: 'normativa', component:NormativaComponent}
];
