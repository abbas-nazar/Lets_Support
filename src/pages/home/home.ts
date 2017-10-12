import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {}
  results: any = "nope"

  constructor(public navCtrl: NavController, private http: Http) {

  }

  signUpForm(){
    this.http.post('https://cyberbuz101.appspot.com/users/signup', this.user)
      .subscribe(data => this.results = data)
      , error => {
        console.log(error)
      }
    console.log(this.user)
    console.log(this.results)
  }



}
