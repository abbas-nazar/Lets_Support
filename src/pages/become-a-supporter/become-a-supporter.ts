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
  currentUser: any
  goals: any[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentUser = navParams.get('currentUserFromLogin')
    this.goals = this.currentUser.goals
  }

  ionViewDidLoad() {
  }


}
