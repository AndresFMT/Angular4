import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent  {

  constructor( private router:Router) { }
  search_Url( termino:string){
  	
	  	var url = 'https://www.emagister.com.co/web/search/?pfichas=14846&sid=3&utm_source=elespectador&utm_medium=cpl&utm_content=buscador_widget_edu&utm_campaign=buscador_widget_edu&btnBuscar=Buscar&q=' + termino;
	  	window.open(url,'_blank');
		}

}
