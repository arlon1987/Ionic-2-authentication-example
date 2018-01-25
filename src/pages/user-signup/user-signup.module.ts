import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserSignup } from './user-signup';

@NgModule({
  declarations: [
    UserSignup,
  ],
  imports: [
    IonicPageModule.forChild(UserSignup),
  ],
  exports: [
    UserSignup
  ]
})
export class UserSignupModule {}
