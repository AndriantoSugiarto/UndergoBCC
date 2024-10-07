import { Component, OnInit } from '@angular/core';
import { Experience } from '../classes/experience';
import { Constants } from '../classes/constants';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements OnInit {
	experiences: Experience[] = [];

  	constructor() {
		this.experiences = [
			{
				bg_color: 'rgb(136, 131, 188)',
				image: Constants.BASE_API_URL + 'assets/experience/experience-1.webp',
				header: 'Discover Dirimu',
				text: 'ikuti setiap sesi pengajaran di undergo 2024. setiap sesi dirancang khusus agar kamu dapat merefleksikan siapa kamu. di tahun ini kita undang ps. jefri theresna yang ahli banget di bidang kepribadian supaya kamu kenal pribadi kamu sejelas-jelasnya.'
			},
			{
				bg_color: 'rgb(255, 189, 89)',
				image: Constants.BASE_API_URL + 'assets/experience/experience-2.webp',
				header: 'DISCOVER personalitimu',
				text: 'khusus di undergo 2024 ini kamu bakalan belajar tentang tipe-tipe kepribadian dengan metode disc. kira-kira kamu orang yang seperti apa? kelebihan dan kekuranganmu apa? menarik bukan? jangan lewatin self-discovery pitstop ya di undergo 2024 kali ini.'
			},
			{
				bg_color: 'rgb(245, 173, 13)',
				image: Constants.BASE_API_URL + 'assets/experience/experience-3.webp',
				header: 'ruang bicara',
				text: 'datangi ruang bicara fest. di sore hari cerianya undergo 2024. kita bakal ngobrolin hidup dan masa depan bareng temen-temen homecell kita dan temen-temen dari kampus-kampus dan komunitas lain juga.'
			},
			{
				bg_color: 'rgb(136, 131, 188)',
				image: Constants.BASE_API_URL + 'assets/experience/experience-4.webp',
				header: 'ruang bersenandung',
				text: 'sing along bareng temen-temen homecell di malam minggu dengan alunan musik accoustic bakalan seru banget, memorable, dan bikin ketagihan deh pastinya. jangan lupa liat kanan-kiri kamu ya nanti, siapa tau kamu lagi nyanyi bareng calon pasangan hidup kamu di masa depan.'
			},
			{
				bg_color: 'rgb(210, 153, 76)',
				image: Constants.BASE_API_URL + 'assets/experience/experience-5.webp',
				header: 'discover temen nebeng',
				text: 'jangan takut kalau kamu nggak punya opsi buat berangkat ke venue undergo nanti, undergo bakalan sedia-in 100 pax akomodasi buat kamu yang mau berangkat bareng temen-temen lainnya. entah nebeng atau naik transportasi yang undergo siapin. '
			},
			{
				bg_color: 'rgb(157, 32, 32)',
				image: Constants.BASE_API_URL + 'assets/experience/experience-6.webp',
				header: 'discover aksi nyata',
				text: 'selama ada di undergo, jangan buang sampah sembarangan ya bridge. dengan pisahin sampah-sampahmu terpisah sesuai jenisnya, kamu sudah membantu undergo dan orang-orang yang terlibat di dalamnya untuk dapat mendaur ulang serta memanfaatkan ulang sampah yang kamu buang.'
			},
		];
	}

  	ngOnInit() {
  	}

}
