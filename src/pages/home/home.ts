import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ColasPage } from '../colas/colas';
import { EntropiaPage } from '../entropia/entropia';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  colas(){
  	this.navCtrl.push(ColasPage);
  }

  entropia(){
    this.navCtrl.push(EntropiaPage);
  }

  markov(){
    this.navCtrl.push(ColasPage);
  }

}
