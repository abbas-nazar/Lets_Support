/**
 * TODO:
 * [X] Change in HTML form function from test to signUpForm
 * [X] Add date of birth
 * [ ] Add terms
 * [X] Add 'already a member?'
 * [X] Add validation
 * [X] Fix pattern validation
 * [ ] Add cursor on hover to "Already a member? Log in"
 */

import { Component } from '@angular/core';
import { Http } from '@angular/http'
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  results: any = "nope"
  signUpUser: FormGroup
  user: { name: string, password: string, dateofbirth: string, email: string } = {
    name: '',
    password: '',
    dateofbirth: '',
    email: ''
  }

  validation_messages = {
    'name': [
        { type: 'required', message: 'Name is required.' },
        { type: 'minlength', message: 'Name must be at least 3 characters long.' },
        { type: 'maxlength', message: 'Name cannot be more than 50 characters long.' },
        { type: 'pattern', message: 'Your name must contain only numbers and letters.' }
      ],
      'email': [
        { type: 'required', message: 'Email is required.' },
        { type: 'pattern', message: 'Please enter a valid email.'},
        { type: 'validEmail', message: 'This email ahs already been taken.'}
      ],
      'password': [
        { type: 'required', message: 'Password is required.' },
        { type: 'minlength', message: 'Password must be at least 8 characters long.'},
        { type: 'pattern', message: 'Password must contain small letters, capital letters and numbers'}
      ],
      'dateofbirth': [
        { type: 'required', message: 'Please fill in your date of birth.'}
      ]
    }
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private http: Http)
  {

    //Validators
    this.signUpUser = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        Validators.required
      ])],
      name: ['', Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z ]+$'),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9 !@#\$%\^&\*]+$'),
        Validators.required
      ])],
      dateofbirth: ['', Validators.compose([
        Validators.required
      ])]
    })
  }

  signUpForm(){

    if(this.signUpUser.valid){
      this.http.post('https://cyberbuz101.appspot.com/users/signup', this.user)
      .subscribe(data => this.results = data)
      , error => {
        console.log(error)
      }
    console.log(this.user)
    console.log(this.results)
    this.navCtrl.push('LoginPage')
    }
    
  }

  navToLogin(){
    this.navCtrl.push('LoginPage')
  }

}
