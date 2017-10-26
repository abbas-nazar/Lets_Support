/**
 * TODO:
 * [ ] Login with email or username
 * [ ] Password check
 * [ ] Add Forgot password
 * [ ] Send profile data to goal page so that goal page knows who logged in
 * ![ ] profiles provider query() takes a while to respond! Build in an await function or something!
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs'

import { Profiles } from '../../providers/profiles'

// To test navparam
import { BecomeASupporterPage } from '../become-a-supporter/become-a-supporter'



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  rememberMe: boolean = false
  currentProfile: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public profiles: Profiles) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage'); 
  }

  login() {
    this.currentProfile = this.profiles.query()    

    this.navCtrl.push(TabsPage, {
      currentUserFromLogin : this.currentProfile[1]    
    })
  }

  print() {
    this.currentProfile = this.profiles.query()    
  
    this.navCtrl.push(BecomeASupporterPage, {
      currentUserFromLogin: this.currentProfile[1]
    })
  }

}
