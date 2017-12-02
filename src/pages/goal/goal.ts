/**
 * TODO:
 * [ ] Fix layout with flexbox
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

import { SupportingPage } from '../supporting/supporting'
import { MainGoalPage } from '../main-goal/main-goal'

// import { Profile } from '../../models/profile'
import { Profiles } from '../../providers/profiles'

/**
 * Generated class for the GoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html',
})
export class GoalPage {
  information: any[]
  profile: any[]
  currentProfile: any
  currentProfileGoals: any[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, profiles: Profiles) {
    // Profiles
    this.currentProfile = navParams.data //|| profiles.defaultProfile
    this.currentProfileGoals = this.currentProfile.goals[0]
    this.information = this.currentProfile.goals[0].items
    
    // this.information = this.currentProfileGoals.items    

    // Goal Progression Accordion
      // let localData = http.get('assets/goal.json').map(res => res.json().items)
      // localData.subscribe(data => {
      //   this.information = data;
      // })

  }



  becomeASupporter() {
    // this.navCtrl.push(BecomeASupporterPage);
    // this.currentProfileGoals = this.currentProfile.goals[0]
    // console.log(this.currentProfile.goals[0])
    
    this.navCtrl.push('BecomeASupporterPage', {
      currentUserFromLogin: this.currentProfile
    });

    // console.log(this.information)
    // console.log(this.currentProfile.find(value => value.nat === 'TR').goals)
  }

  navToSupporting() {
    this.navCtrl.push(SupportingPage, {
      currentUserFromLogin: this.currentProfile
    })
  }

  navToSupporters() {

  }

  navToGoal() {
    this.navCtrl.push(MainGoalPage)
  }

  // Goal Progression Accordion
  toggleSection(i){
    this.information[i].open = !this.information[i].open
  }

  toggleItem(i, j){
    this.information[i].children[j].open = !this.information[i].children[j].open
  }
}
