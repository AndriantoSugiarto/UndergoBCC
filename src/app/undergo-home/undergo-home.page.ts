import { Component, OnInit } from '@angular/core';
import { Constants } from '../classes/constants';
import { Lineup } from '../classes/lineup';

@Component({
  selector: 'app-undergo-home',
  templateUrl: './undergo-home.page.html',
  styleUrls: ['./undergo-home.page.scss'],
})
export class UndergoHomePage implements OnInit {
	logo_undergo_url:string = Constants.BASE_API_URL+"assets/icon/undergo-cc-24.svg";
	barcode_url:string = Constants.BASE_API_URL+"assets/barcode.svg";
	undergo_2023_url_video: string = Constants.BASE_API_URL + 'assets/videos/undergo-recap.mp4';
	speakers: Lineup[] = [];
  	constructor() {
		this.speakers = [
			{
				bg_image: Constants.BASE_API_URL + 'assets/arc-circle.svg',
				photo: Constants.BASE_API_URL + 'assets/images/ps-jefri-thresna.webp',
				name: 'Ps. Jefri Theresna',
				name_2: '(specialist in disc)'
			},
			{
				bg_image: Constants.BASE_API_URL + 'assets/arc-circle.svg',
				photo: Constants.BASE_API_URL + 'assets/images/ps-winston-y.webp',
				name: 'Ps. Winston',
				name_2: 'Yehezkiel'
			},
			{
				bg_image: Constants.BASE_API_URL + 'assets/arc-circle.svg',
				photo: Constants.BASE_API_URL + 'assets/images/ps-jansen-bs.webp',
				name: 'Ps. Jansen',
				name_2: 'Bernard'
			},
			{
				bg_image: Constants.BASE_API_URL + 'assets/arc-circle.svg',
				photo: Constants.BASE_API_URL + 'assets/images/the-youth-pastors.webp',
				name: 'The (Youth)',
				name_2: 'Pastors'
			},
			{
				bg_image: Constants.BASE_API_URL + 'assets/arc-circle.svg',
				photo: Constants.BASE_API_URL + 'assets/images/ello.webp',
				name: 'Marcello',
				name_2: 'Nanlohi'
			},
			{
				bg_image: Constants.BASE_API_URL + 'assets/arc-circle.svg',
				photo: Constants.BASE_API_URL + 'assets/images/ecc-performing-art.webp',
				name: 'ecc performing',
				name_2: 'art'
			},
			{
				bg_image: Constants.BASE_API_URL + 'assets/arc-circle.svg',
				photo: Constants.BASE_API_URL + 'assets/images/bcc-crew.webp',
				name: 'bcc crew',
				name_2: ''
			},
			{
				bg_image: Constants.BASE_API_URL + 'assets/arc-circle.svg',
				photo: Constants.BASE_API_URL + 'assets/images/flo.webp',
				name: 'Ruang Bicara',
				name_2: 'with Flo Tenesha'
			},
		];
	}

  	ngOnInit() {}

}
