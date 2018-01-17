import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service'

@Component({
  selector: 'app-centros',
  templateUrl: './centros.component.html',
  styleUrls: ['./centros.component.sass']
})
export class CentrosComponent implements OnInit {

	datos:any

  constructor(private _service: ServiceService) {

   }

  ngOnInit() {
  	this._service.getService().subscribe (
			(res:any) => {
				this.datos=res.centros;
			}
		)
  }

}
