import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
		let _word = document.getElementById("ee-search");
		let _button = document.getElementById("btn-search");
		_button.addEventListener('click',_search);
		function _search(){
			
	  	console.log(_word.value);
	  	var url = 'https://www.emagister.com.co/web/search/?pfichas=14846&sid=3&utm_source=elespectador&utm_medium=cpl&utm_content=buscador_widget_edu&utm_campaign=buscador_widget_edu&btnBuscar=Buscar&q='+_word.value;
	  	window.open(url,'_blank');
		}
  }

}