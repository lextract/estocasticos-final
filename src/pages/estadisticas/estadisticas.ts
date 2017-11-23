import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HorarioProvider } from '../../providers/horario/horario';
/**
 * Generated class for the EstadisticasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html',
})
export class EstadisticasPage {

	horarios: any;

	servicio_id: any;
	tasa_arribo: any;
	tasa_servidores: any;
	servidores: any;

	tiempo_cola: number;
	tiempo_servicio: number;
	tiempo_sistema: number;	

	p: number;
	servicio_vacio: number;

	tiempos: any;


  constructor(public horarioProvider: HorarioProvider, public navCtrl: NavController, public navParams: NavParams) {
  this.servicio_id = this.navParams.get('id');
  this.tasa_servidores = this.navParams.get('tasa_servidores');
  this.servidores = this.navParams.get('servidores');

  this.getHorarios();

  //for(let horario in this.horarios){
  	//this.tiempos.push(Array({'id': 3,'name': "cds"}));
  //}


  //FALTA ITERAR SOBRE HORARIOS:
  this.tiempo_sistema = 1/(this.tasa_servidores-this.tasa_arribo);
  console.log(this.tiempo_sistema);

  this.tiempo_cola = this.tasa_arribo/(this.tasa_servidores*(this.tasa_servidores-this.tasa_arribo));
  console.log(this.tiempo_cola);

  this.tiempo_servicio = 1/this.tasa_servidores;
  console.log(this.tiempo_servicio);

  }



  getHorarios(){
	this.horarioProvider.getHorarios(this.servicio_id)
	.subscribe(res=>this
		.horarios=res);
  }


  

  tiempo_de_servicio(){
  	//for (var i = 0; i < this.valores.length; i++) {
   		
	//}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstadisticasPage');
  }

}
