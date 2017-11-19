import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ColasPage } from '../colas/colas'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


	@ViewChild('arribos') arribos;
	@ViewChild('servicios') servicios;
	@ViewChild('servidores') servidores;

  constructor(public navCtrl: NavController) {

  }

  calcular(){
  	console.log(this.arribos.val);
  	this.navCtrl.push(ColasPage, { arribos: this.arribos.value, servicios: this.servicios.value , servidores: this.servidores.value});
  }

}
