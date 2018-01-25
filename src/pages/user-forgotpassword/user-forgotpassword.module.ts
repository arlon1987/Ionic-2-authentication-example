import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserForgotpassword } from './user-forgotpassword';

@NgModule({
  declarations: [
    UserForgotpassword,
  ],
  imports: [
    IonicPageModule.forChild(UserForgotpassword),
  ],
  exports: [
    UserForgotpassword
  ]
})
export class UserForgotpasswordModule {}
