import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SupportingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supporting',
  templateUrl: 'supporting.html',
})
export class SupportingPage {
  currentUserFromLogin: any
  supporting: any[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentUserFromLogin = navParams.get('currentUserFromLogin')
    this.supporting = this.currentUserFromLogin.supporting
    console.log(this.currentUserFromLogin)
    console.log(this.supporting)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportingPage');
  }

}
