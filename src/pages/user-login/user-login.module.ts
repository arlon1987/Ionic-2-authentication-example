import { NgModule } from '@angular/core';
import { IonicPageModule  } from 'ionic-angular';
import { UserLogin } from './user-login';

@NgModule({
  declarations: [
    UserLogin,
  ],
  imports: [
    IonicPageModule .forChild(UserLogin),
  ],
  exports: [
    UserLogin
  ]
})
export class UserLoginModule {
	
	mytest(){
		console.log("this is my test");
	}
}
