import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EntropiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entropia',
  templateUrl: 'entropia.html',
})
export class EntropiaPage {

	entropia: number;
	@ViewChild('p1') p1;
	@ViewChild('p2') p2;
	@ViewChild('p3') p3;
	@ViewChild('p4') p4;
	@ViewChild('p5') p5;
	@ViewChild('p6') p6;
	@ViewChild('p7') p7;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

	log2(a) {
		if(a == 0) return 0;
	    return Math.log2(a);
	};

 calcular(){
 	this.entropia = - ( 
 		this.p1.value * this.log2(this.p1.value) + 
 		this.p2.value * this.log2(this.p2.value) +
 		this.p3.value * this.log2(this.p3.value) +
 		this.p4.value * this.log2(this.p4.value) +
 		this.p5.value * this.log2(this.p5.value) +
 		this.p6.value * this.log2(this.p6.value) +
 		this.p7.value * this.log2(this.p7.value)
 		)

 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntropiaPage');
  }

}
