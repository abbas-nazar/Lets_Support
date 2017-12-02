import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Headers, RequestOptions } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { GoalPage } from '../pages/goal/goal'
import { PostsPage } from '../pages/posts/posts'
import { CommunityPage } from '../pages/community/community'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Profiles } from '../providers/profiles'

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    GoalPage,
    PostsPage,
    CommunityPage,
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
    GoalPage,
    PostsPage,
    CommunityPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Profiles,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
