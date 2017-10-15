import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
// import { WelcomePage } from '../pages/welcome/welcome'
import { BecomeASupporterPage } from '../pages/become-a-supporter/become-a-supporter'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Notifications', component: TabsPage, icon: 'home' },
      { title: 'Goals', component: TabsPage, icon: 'home' },
      { title: 'Profile', component: TabsPage, icon: 'home' },
      { title: 'Edit Profile', component: TabsPage, icon: 'home' },
      { title: 'Cashier', component: TabsPage, icon: 'home' },
      { title: 'Settings & Privacy', component: TabsPage, icon: 'home' },
      { title: 'Help Center', component: TabsPage, icon: 'home' }
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openSupporters(){

  }

  openSupporting(){
    
  }
}
