import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {

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
		nav.classList.toggle('hide');
	}
}
