import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';
import { UserLogin } from '../user-login/user-login';
import { UserSignup } from '../user-signup/user-signup';

@IonicPage()
@Component({
  selector: 'page-user-forgotpassword',
  templateUrl: 'user-forgotpassword.html',
})
export class UserForgotpassword {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserForgotpassword');
  }

  dashboardPage(){ this.navCtrl.push(Dashboard); }
  loginPage(){ this.navCtrl.push(UserLogin); }
  signupPage(){ this.navCtrl.push(UserSignup); }

}
