import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CurrentUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CurrentUserProvider {
  currentUser: any[] = []

  constructor(public http: Http) {
    // this.http.get('assets/data/account/Barry/profile.json')
  }

  fetchCurrentUser(){
    return this.http.get('assets/data/account/Barry/profile.json')
  }

}
