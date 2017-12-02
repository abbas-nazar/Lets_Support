/**
 * TODO:
 * [ ] Login with email or username
 * [ ] Password check
 * [ ] Add Forgot password
 * [ ] Send profile data to goal page so that goal page knows who logged in
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import { Profiles } from '../../providers/profiles'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  rememberMe: boolean

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private profiles: Profiles) {}

  async login() {
    try {
      const result = this.profiles.query()
      if (result) {
        this.navCtrl.setRoot(TabsPage, {
          currentUserFromLogin: result[0]
        })
      }
    }
    catch (error) {
      this.toast.create({
        message: `Something went wrong`,
        duration: 3000
      }).present()
    }
  }

  navigateToSignUp(){
    this.navCtrl.push('SignUpPage')
  }

}
