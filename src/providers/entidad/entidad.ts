import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the EntidadProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EntidadProvider {

  constructor(public http: Http) {
    console.log('Hello EntidadProvider Provider');
  }

  apiUrl = 'https://backend-estocasticos.herokuapp.com';


  getEntidades(){
	return this.http.get(this.apiUrl+'/entidads')
	        .map(res => res.json());
	    }

}

