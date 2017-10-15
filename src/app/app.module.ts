import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Headers, RequestOptions } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { LoginPage } from '../pages/login/login'
import { GoalPage } from '../pages/goal/goal'
import { PostsPage } from '../pages/posts/posts'
import { CommunityPage } from '../pages/community/community'
import { BecomeASupporterPage } from '../pages/become-a-supporter/become-a-supporter'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    WelcomePage,
    SignUpPage,
    LoginPage,
    GoalPage,
    PostsPage,
    CommunityPage,
    BecomeASupporterPage
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
    SignUpPage,
    LoginPage,
    GoalPage,
    PostsPage,
    CommunityPage,
    BecomeASupporterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
