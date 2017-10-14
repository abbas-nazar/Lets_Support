/**
 * TODO:
 * [ ] Change in HTML form function from test to signUpForm
 * [X] Remove email
 * [ ] Remove full name
 * [ ] Add date of birth
 * [ ] Add terms
 * [ ] Add 'already a member?'
 * [ ] Add validation
 * 
 */

import { Component } from '@angular/core';
import { Http } from '@angular/http'
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms"

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  results: any = "nope"
  signUpUser: FormGroup
  user: { username: string, password: string, fullname: string, email: string } = {
    username: '',
    password: '',
    fullname: '',
    email: ''
  };
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private http: Http)
  {
    this.user.email = navParams.get('email');

    this.signUpUser = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      fullname: ['']
    })
  }

  test(){
    console.log(this.user)
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
