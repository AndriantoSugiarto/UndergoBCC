import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/classes/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
	icon_airplane: string = Constants.BASE_API_URL + "assets/airplane-2.svg";
	logo_bridge_url:string = Constants.BASE_API_URL+"assets/images/bridge_logo.webp";
	logo_ecc_url:string = Constants.BASE_API_URL+"assets/images/logo_ecc.webp";
  	constructor() { }

  	ngOnInit() {}

}
