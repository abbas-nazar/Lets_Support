/**
 * TODO:
 * [ ] Add https://www.youtube.com/watch?v=xMj_P_6H69g to page
 * [X] Add validation to email form
 * [ ] Check whether email is already used
 */

import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms"

import { TabsPage } from '../tabs/tabs'
import { SignUpPage } from '../sign-up/sign-up'
import { LoginPage } from '../login/login'

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  signUpEmail: FormGroup
  email: string

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      //Simple email validation
      this.signUpEmail = this.formBuilder.group({
        email: ['', Validators.compose([Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])]
      })

  }

  //Login navigation
  continueButton(){
    this.navCtrl.push(LoginPage)
  }

  redirectToRegisterPage(){
    // Only submit if email is valid
    if(this.signUpEmail.valid){
      this.navCtrl.push(SignUpPage, {email: this.email})
    }
  }
}
