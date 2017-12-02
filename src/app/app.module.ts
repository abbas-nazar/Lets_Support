import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Headers, RequestOptions } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login'
import { GoalPage } from '../pages/goal/goal'
import { PostsPage } from '../pages/posts/posts'
import { CommunityPage } from '../pages/community/community'
import { BecomeASupporterPage } from '../pages/become-a-supporter/become-a-supporter'
import { SupportingPage } from '../pages/supporting/supporting'
import { MainGoalPage } from '../pages/main-goal/main-goal'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Profiles } from '../providers/profiles'

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    WelcomePage,
    LoginPage,
    GoalPage,
    PostsPage,
    CommunityPage,
    BecomeASupporterPage,
    SupportingPage,
    MainGoalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
      tabsHideOnSubPages: 'true'
    },
  )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    WelcomePage,
    LoginPage,
    GoalPage,
    PostsPage,
    CommunityPage,
    BecomeASupporterPage,
    SupportingPage,
    MainGoalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Profiles,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
