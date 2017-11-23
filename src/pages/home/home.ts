import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EntidadProvider } from '../../providers/entidad/entidad';

import { ServicioPage } from '../servicio/servicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public entidadProvider: EntidadProvider, public navCtrl: NavController) {
  	this.getEntidades();
  }

  entidades: any;

  getEntidades(){
  	this.entidadProvider.getEntidades()
  	.subscribe(res=>this
  		.entidades=res);
  }

  servicios(id){
    this.navCtrl.push(ServicioPage, { id: id });
  }

}
