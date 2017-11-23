import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the ServidorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServidorProvider {

  constructor(public http: Http) {
    console.log('Hello ServidorProvider Provider');
  }

  apiUrl = 'https://backend-estocasticos.herokuapp.com';

  getServicios(id){
	return this.http.get(this.apiUrl+'/servicios_entidad/'+id)
	        .map(res => res.json());
	    }

}
