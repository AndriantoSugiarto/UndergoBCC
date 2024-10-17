import { Component, OnInit } from '@angular/core';
import { Constants } from '../classes/constants';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.page.html',
  styleUrls: ['./under-construction.page.scss'],
})
export class UnderConstructionPage implements OnInit {

	under_construction_link: String = Constants.BASE_API_URL + 'assets/images/under-construction.jpg';
  	constructor() { }

  	ngOnInit() {
 	}

}
