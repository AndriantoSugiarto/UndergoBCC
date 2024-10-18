import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/classes/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {
	logo_undergo_url:string = Constants.BASE_API_URL+"assets/icon/undergo-cc-24-black.svg";
	icon_airplane_url:string = Constants.BASE_API_URL+"assets/airplane.svg";
	form_link: string = "https://form.jotform.com/242871906954468";
	constructor() {
	}

	ngOnInit() {}

	toggleMenu() {
		const icon1 = document.getElementById("a") as HTMLElement;
		const icon2 = document.getElementById("b") as HTMLElement;
		const icon3 = document.getElementById("c") as HTMLElement;
		const nav = document.getElementById('nav') as HTMLElement;

		icon1.classList.toggle('a');
		icon2.classList.toggle('c');
		icon3.classList.toggle('b');
		nav.classList.toggle('show');
	}

	checkStatusLink(disabled: boolean) {
		if(disabled) {
			return "#";
		} else {
			return this.form_link;
		}
	}

	changeTargetLink(disabled: boolean) {
		if(disabled) {
			return "_self";
		} else {
			return "_blank";
		}
	}
}
