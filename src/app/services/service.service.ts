import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http,Response,Headers } from '@angular/http';
import "rxjs/Rx"

@Injectable()
export class ServiceService {
	url: string;
  constructor(private http: Http) {
  		this.url= 'http://visor-js.herokuapp.com/https://content.emagistercdn.com/elespectador/Contenido_Widget_Home.json'
   }

  getService(): Observable<any> {

  	return this.http.get(this.url)
  		.map(
  			(response: Response) => { 
  				return response.json(); 
  			}
  		);
  } 
}
