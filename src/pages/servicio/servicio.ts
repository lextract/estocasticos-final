import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstadisticasPage } from '../estadisticas/estadisticas';

import { ServidorProvider } from '../../providers/servidor/servidor';
/**
 * Generated class for the ServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicio',
  templateUrl: 'servicio.html',
})
export class ServicioPage {

	entidad_id: any;
	servicios: any;

  constructor(public servicioProvider: ServidorProvider, public navCtrl: NavController, public navParams: NavParams) {
  this.entidad_id = this.navParams.get('id');
  this.getServicios();  
  }

  getServicios(){
	this.servicioProvider.getServicios(this.entidad_id)
	.subscribe(res=>this
		.servicios=res);
  }

  estadisticas(id, tasa_servidores, servidores){
    this.navCtrl.push(EstadisticasPage, { id: id , tasa_servidores:tasa_servidores, servidores:servidores});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicioPage');
  }

}
