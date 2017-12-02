import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainGoalPage } from './main-goal';

@NgModule({
  declarations: [
    MainGoalPage,
  ],
  imports: [
    IonicPageModule.forChild(MainGoalPage),
  ],
})
export class MainGoalPageModule {}
