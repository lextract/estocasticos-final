import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  console.log(this.servidores);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColasPage');
  }

}
