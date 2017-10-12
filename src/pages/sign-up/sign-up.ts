import { Component } from '@angular/core';
import { Http } from '@angular/http'
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/**
 * Todo:
 * Change in HTML form function from test to signUpForm
 * 
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  user = {}
  results: any = "nope"
  email: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.email = navParams.get('email'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  test(){
    console.log(this.email)
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
