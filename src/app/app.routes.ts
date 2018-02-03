import { RouterModule, Routes } from '@angular/router';

import {
	
	ContentComponent

} from "./components/index.paginas";


const app_routes: Routes = [
	{ path: 'content/2', component: ContentComponent },
	{ path: 'content/:id', component: ContentComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'content/2' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true }); 