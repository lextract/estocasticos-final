import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MmckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mmck',
  templateUrl: 'mmck.html',
})
export class MmckPage {

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
    console.log('ionViewDidLoad MmckPage');
  }

}
