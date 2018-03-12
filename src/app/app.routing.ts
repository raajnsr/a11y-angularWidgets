import { Routes, RouterModule } from '@angular/router';
import { AccordionsComponent } from './accordions/accordions.component';
import { DuplicateIdComponent } from './duplicate-id/duplicate-id.component';

const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'accordions', component: AccordionsComponent },
    { path: 'duplicateid', component: DuplicateIdComponent }
];

export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);