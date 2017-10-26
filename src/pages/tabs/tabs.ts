import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';


import { GoalPage } from '../goal/goal';
import { PostsPage } from '../posts/posts';
import { CommunityPage } from '../community/community';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = GoalPage;
  tab2Root = PostsPage;
  tab3Root = CommunityPage;

  currentUserFromLogin: any

  constructor(public navParams: NavParams) {
    this.currentUserFromLogin = navParams.get('currentUserFromLogin')

  }
}
