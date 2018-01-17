import { RouterModule, Routes } from '@angular/router';

import {
	CentrosComponent,
	CursosComponent

} from "./components/index.paginas";


const app_routes: Routes = [
	{ path: '', component: CursosComponent },
	{ path: 'centros', component: CentrosComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true }); 