/**
 * TODO:
 * [ ] Add https://www.youtube.com/watch?v=xMj_P_6H69g to page
 * [ ] Add validation to email form
 * [ ] 
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

import { TabsPage } from '../tabs/tabs';
import { SignUpPage } from '../sign-up/sign-up';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  signUpEmail: FormGroup;
  email: string

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.signUpEmail = this.formBuilder.group({
        email: ['', Validators.email]
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  continueButton(){
    this.navCtrl.push(TabsPage);
  }

  redirectToRegisterPage(){
    this.navCtrl.push(SignUpPage, {email: this.email})
  }

  // isValid(field: string) {
  //   let formField = this.myForm.find(field);
  //   return formField.valid || formField.pristine;
  // }

  // nameValidator(control: FormControl): {[s: string]: boolean} {
  //   if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
  //     return {invalidName: true};
  //   }
  // }

  // phoneValidator(control: FormControl): {[s: string]: boolean} {
  //   if (control.value !== '') {
  //     if (!control.value.match('\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}')) {
  //       return {invalidPhone: true};
  //     }
  //   }
  // }

  // emailValidator(control: FormControl): {[s: string]: boolean} {
  //   if (!(control.value.toLowerCase().match('^[a-zA-Z]\\w*@gmail\\.com$') || control.value.toLowerCase().match('^[a-zA-Z]\\w*@yahoo\\.com$'))) {
  //     return {invalidEmail: true};
  //   }
  // }

}
