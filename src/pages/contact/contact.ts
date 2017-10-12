import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  user = {}
  results: any = "nope"

  constructor(public navCtrl: NavController, private http: Http) {

  }

  logOnForm(){
    this.http.post('https://cyberbuz101.appspot.com/users/logon', this.user)
      .subscribe(data => this.results = data)
      , error => {
        console.log(error)
      }
    console.log(this.user)
    console.log(this.results)
  };

}
