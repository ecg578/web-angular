import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PlanesComponent } from './planes/planes.component';

export const routes: Routes = [

    {path: '', component: IndexComponent},
    {path: 'planes', component: PlanesComponent},
    {path: 'contacto', component: ContactoComponent},
    
];
