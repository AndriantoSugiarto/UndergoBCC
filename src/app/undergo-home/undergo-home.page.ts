import { Component, OnInit } from '@angular/core';
import { Constants } from '../classes/constants';

@Component({
  selector: 'app-undergo-home',
  templateUrl: './undergo-home.page.html',
  styleUrls: ['./undergo-home.page.scss'],
})
export class UndergoHomePage implements OnInit {
	undergo_2023_url_video: string = Constants.BASE_API_URL + 'assets/videos/undergo-recap.mp4';
  	constructor() { }

  	ngOnInit() {}

}
