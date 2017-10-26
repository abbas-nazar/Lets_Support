import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Profile } from '../models/profile';

@Injectable()
export class Profiles {
  profiles: Profile[] = [];

  defaultProfile: any = {
      "gender":"male",
      "name":{
        "title":"mr",
        "first":"onur",
        "last":"taşlı"
      },
      "location":{
        "street":"4060 istiklal cd",
        "city":"batman",
        "state":"sivas",
        "postcode":81987
      },
      "email":"onur.taşlı@example.com",
      "login":{
        "username":"ticklishleopard690",
        "password":"grateful",
        "salt":"xhE7hP65",
        "md5":"d1478c1b0f6108ad4c627127786837bb",
        "sha1":"5208c3aad16a973cf984a8ebb119b527d270ebd9",
        "sha256":"6d44d1c43a3c12876d243fe1533517d2fe227b6e5b7037554bc116e81caad6c4"
      },
      "dob":"1970-01-23 11:04:15",
      "registered":"2002-10-31 12:48:16",
      "phone":"(551)-069-4323",
      "cell":"(185)-581-5426",
      "id":{
        "name":"",
        "value":null
      },
      "picture":{
        "large":"https://randomuser.me/api/portraits/men/47.jpg",
        "medium":"https://randomuser.me/api/portraits/med/men/47.jpg",
        "thumbnail":"https://randomuser.me/api/portraits/thumb/men/47.jpg"
      },
      "nat":"TR"
  };

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
