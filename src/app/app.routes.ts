import { Routes } from '@angular/router';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { AccionPopularComponent } from './components/accion-popular/accion-popular.component';

export const routes: Routes = [
    {path: '', component: AccionPopularComponent},
];
