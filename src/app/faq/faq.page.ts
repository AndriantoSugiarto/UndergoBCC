import { Component, OnInit } from '@angular/core';
import { Faq } from '../classes/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
	question: string ="";
	faqs: Faq[] = [];
  	constructor() {
		this.faqs = [
			{
				question: 'Tempat UNDERGO-nya di mana ?',
				answer: 'Wisma El Shaddai(Yayasan Bukit Doa El Shaddai) atau Villa Kolmas 59, Lembang.'
			},
			{
				question: 'Registrasi dan beli tiketnya di mana ?',
				answer: 'Bisa lewat halaman News Event di Els App atau <a href="https://form.jotform.com/242691719211456" target="_blank">Click This Link to Book A Ticket</a>'
			},
			{
				question: 'Apa saja Pilihan Transportasi untuk datang Ke UNDERGO ?',
				answer: 'Bisa datang sendiri dengan Kendaraan Pribadi atau Online melalui Jl. Dr. Setiabudi atau melaui Jl. Kolonel Masturi. Undergo menyediakan trasnportasi dengan kuota terbatas untuk BRIDGE yang tidak memilki opsi kendaraan untuk berangkat.'
			},
			{
				question: 'Apa aja yang mesti di bawa ke UNDERGO nanti ?',
				answer: 'Semua perlengkapan yang diperlukan untuk UNDERGO 2024 akan diupdate oleh MIN BRIDGE melalui social Media dan Broadcast Message di WhatsApp peserta. Yang Pasti jangan lupa bawa temen sebanyak-banyaknya untuk hadir ke UNDERGO.'
			}
		];
	}

  	ngOnInit() {
  	}

	changeQuestion() {
		let basic_url = "https://wa.me/+6281220581052/?text=" + this.question;
		return encodeURI(basic_url);
	}
}
