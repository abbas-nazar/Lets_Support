import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Profile } from '../models/profile';

@Injectable()
export class Profiles {
  profiles: Profile[] = [];

  constructor(public http: Http) {
    
    let localData = this.http.get('assets/data.json').map(res => res.json().data)
    localData.subscribe(data => {
      this.profiles = data
    })
  }

  query(params?: any) {
    if (!params) {
      return this.profiles;
    }

    return this.profiles.filter((profile) => {
      for (let key in params) {
        let field = profile[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return profile;
        } else if (field == params[key]) {
          return profile;
        }
      }
      return null;
    });
  }

  add(profile: Profile) {
    this.profiles.push(profile);
  }

  delete(profile: Profile) {
    this.profiles.splice(this.profiles.indexOf(profile), 1);
  }
}
