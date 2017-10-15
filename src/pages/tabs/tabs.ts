import { Component } from '@angular/core';

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

  constructor() {

  }
}
