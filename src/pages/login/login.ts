import { UserData } from './../../providers/user-data';
import { ProductsPage } from './../products/products';
import { RegisterPage } from './../register/register';
import { UserOptions } from './../../interfaces/user-options';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { NgForm } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';

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

  login: UserOptions = { mobile:'', password:'', email: '', firstName: '', lastName: ''};
  submitted = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth, public alertCtrl: AlertController, private userData: UserData) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  showAlert(alertMssg) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: alertMssg,
      buttons: ['OK']
    });
    alert.present();
  }

  onLogin(form: NgForm){
    console.log("in onlogin");
    this.submitted = true;
    if(form.valid){
      
      this.fire.auth.signInWithEmailAndPassword(this.login.email, this.login.password).then((data) => {
        this.navCtrl.setRoot(ProductsPage);
        this.userData.login();
      }).catch((error) => {
        this.showAlert("It seems that you don't have account to use this Application\nPlease Register first");
        console.log('Got an '+error);
      });
    }
  }

  goTORegisterPage(){
    this.navCtrl.push(RegisterPage);
  }
}
