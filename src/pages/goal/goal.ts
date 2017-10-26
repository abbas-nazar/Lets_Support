/**
 * TODO:
 * [ ] Fix layout with flexbox
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

import { BecomeASupporterPage } from '../become-a-supporter/become-a-supporter'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, profiles: Profiles) {
    // Profiles
    this.currentProfile = navParams.data || profiles.defaultProfile

    // Goal Progression Accordion
    let localData = http.get('assets/goal.json').map(res => res.json().items)
    localData.subscribe(data => {
      this.information = data;
    })

  }



  becomeASupporter() {
    // this.navCtrl.push(BecomeASupporterPage);
    console.log(this.currentProfile)
  }

  navToSupporting() {

  }

  navToSupporters() {

  }

  // Goal Progression Accordion
  toggleSection(i){
    this.information[i].open = !this.information[i].open
  }

  toggleItem(i, j){
    this.information[i].children[j].open = !this.information[i].children[j].open
  }
}
