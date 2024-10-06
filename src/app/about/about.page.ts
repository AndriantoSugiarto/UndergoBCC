import { Component, OnInit } from '@angular/core';
import { About } from '../classes/about';
import { Constants } from '../classes/constants';
import { Testimony } from '../classes/testimony';

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

	testimonies: Testimony[] = [];
  	constructor() {
		this.testimonies = [
			{
				bg_image: Constants.BASE_API_URL + 'assets/arc-circle.svg',
				photo_url: Constants.BASE_API_URL + 'assets/images/testimony_epen.webp',
				name: 'Stephen Novanto',
				testimony_text: 'Penyembahan dan adanya hubungan yang semakin dalam dengan Tuhan adalah hal yang saya alami di Undergo. Tuhan menyatakan panggilan yang semakin jelas untuk saya bisa melihat visi dan tujuan hidup yang Tuhan mau penuhi di kehidupan saya.'
			},
			{
				bg_image: Constants.BASE_API_URL + 'assets/arc-circle.svg',
				photo_url: Constants.BASE_API_URL + 'assets/images/testimony_framona.webp',
				name: 'Farmona',
				testimony_text: 'Rumah dan Family yang aku rasain di Undergo. ketika aku lagi struggle didalam kuliah dan dalam keluarga disana aku ngerasain Tuhan. Tuhan ngomong personal ke aku kalau Dia ga bakal biarin aku sendirian di dukung dengan adanya anak-anak homecell yang buat aku cuma butuh waktu bicara lagi sama Tuhan. Thank God Undergo jadi momen yang special banget buat aku bisa rasain Tuhan dan bisa percaya lagi sama Tuhan di saat aku lagi susah untuk percaya sama janjinya Tuhan.'
			}

		];
	}

  	ngOnInit() {
  	}

}
