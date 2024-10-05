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
	videoC: string = About.videoC;
	videoC_poster: string = About.videoC_poster;
	description_2: string = About.description_2;
	description_3: string = About.description_3;
	description_4: string = About.description_4;
	description_5: string = About.description_5;
	headline_1: string = About.headline_1;
	headline_2: string = About.headline_2;

  	constructor() { }

  	ngOnInit() {
  	}

}
