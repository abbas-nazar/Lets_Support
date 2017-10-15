/**
 * TODO:
 * [ ] Change in HTML form function from test to signUpForm
 * [ ] Add date of birth
 * [ ] Add terms
 * [ ] Add 'already a member?'
 * [ ] Add validation
 * [ ] Fix pattern validation
 * [ ] Add cursor on hover to "Already a member? Log in"
 */

import { Component } from '@angular/core';
import { Http } from '@angular/http'
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { UsernameValidator } from '../../validators/username'

import { LoginPage } from '../login/login'

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
  }

  validation_messages = {
    'username': [
        { type: 'required', message: 'Username is required.' },
        { type: 'minlength', message: 'Username must be at least 5 characters long.' },
        { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
        { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
        { type: 'validUsername', message: 'Your username has already been taken.' }
      ],
      'password': [
        { type: 'required', message: 'Name is required.' },
        { type: 'minlength', message: 'Password must be at least 8 characters long.'},
        { type: 'pattern', message: 'Password must contain small letters, capital letters and numbers'}
      ]
    }
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private http: Http)
  {
    //Getting email from previous page
    this.user.email = navParams.get('email');

    //Validators
    this.signUpUser = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^[a-zA-Z0-9]+$'),
        // UsernameValidator.checkUsername,
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])],
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

  navToLogin(){
    this.navCtrl.push(LoginPage)
  }

}
