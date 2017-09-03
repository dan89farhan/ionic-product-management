import { RegisterPage } from './../register/register';
import { UserOptions } from './../../interfaces/user-options';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NgForm } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: UserOptions = { username:'', password:'', email: '', firstName: '', lastName: ''};
  submitted = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  onLogin(form: NgForm){
    console.log("in onlogin");
    this.submitted = true;
    if(form.valid){
      this.navCtrl.push(RegisterPage);
    }
  }
}
