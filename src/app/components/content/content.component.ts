import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

	datos:any;
	sub:any;
	titulo:string;

  constructor(private _service: ServiceService, private route: ActivatedRoute, private rt: Router) {

  }

  ngOnInit() {

  	this.sub = this.route.params.subscribe(params => {
      this.getJson(params['id']);
       // In a real app: dispatch action to load the details here.
    });
  }

  getJson(id:number):void {
  	this._service.getService().subscribe (
			(res:any) => {
        res.centros = res.centros.slice(0,2);
        this.datos = (id == 1) ? res.centros : res.cursos;
        return this.datos;
      }
    )
  }

}
