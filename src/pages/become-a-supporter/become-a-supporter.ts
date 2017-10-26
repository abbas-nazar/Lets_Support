import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BecomeASupporterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-become-a-supporter',
  templateUrl: 'become-a-supporter.html',
})
export class BecomeASupporterPage {
  id: any
  name: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get('currentUserFromLogin')
    // this.name = navParams.get('name')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BecomeASupporterPage');
    console.log(this.id)
    // console.log(this.name)
  }

}
