import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

	datos:any;
	sub:any;
	titulo:string;

  constructor(private _service: ServiceService, private route: ActivatedRoute) {

  }

  ngOnInit() {

  	this.sub = this.route.params.subscribe(params => {
  		this.titulo = (params['id'] == 1) ? 'Centros' : 'Cursos';
      this.getJson(params['id']);
       // In a real app: dispatch action to load the details here.
    });
  }

  getJson(id:number):void {
  	this._service.getService().subscribe (
			(res:any) => {
				this.datos = (id == 1) ? res.centros : res.cursos;
				//this.datos=res.centros;
				console.log(this.datos);
				return this.datos;
			}
		)
  }

}
