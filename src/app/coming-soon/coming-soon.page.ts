import { Component, OnInit } from '@angular/core';
import { Constants } from '../classes/constants';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.page.html',
  styleUrls: ['./coming-soon.page.scss'],
})
export class ComingSoonPage implements OnInit {
	base_url: string = Constants.BASE_API_URL;
  	constructor() { }

  	ngOnInit() {
  	}

}
