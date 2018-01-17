import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})

export class CursosComponent implements OnInit {

	datos:any

  constructor(private _service: ServiceService) { }

  ngOnInit() {
  	this._service.getService().subscribe (
			(res:any) =>{
				this.datos=res.cursos;	
			} 
		)
  }

}
