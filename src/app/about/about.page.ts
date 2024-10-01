import { Component, OnInit } from '@angular/core';
import { About } from '../classes/about';
import { Constants } from '../classes/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
	title: string = About.title;
	description: string = About.description;
	video: string = About.video;
  	constructor() { }

  	ngOnInit() {
  	}

}
