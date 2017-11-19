import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Mm1Page } from '../mm1/mm1';
import { MmcPage } from '../mmc/mmc';
import { MmckPage } from '../mmck/mmck';

/**
 * Generated class for the ColasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colas',
  templateUrl: 'colas.html',
})
export class ColasPage {

	arribos: number;
	servicios: number;
	servidores: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.arribos = Number(this.navParams.get('arribos'));
  this.servicios = Number(this.navParams.get('servicios'));
  this.servidores = Number(this.navParams.get('servidores'));

  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColasPage');
  }

}
