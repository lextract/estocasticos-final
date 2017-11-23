import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the HorarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HorarioProvider {

  constructor(public http: Http) {
    console.log('Hello HorarioProvider Provider');
  }

  apiUrl = 'https://backend-estocasticos.herokuapp.com';


  getHorarios(id){
	return this.http.get(this.apiUrl+'/horarios_servicio/'+id)
	        .map(res => res.json());
	    }

}
