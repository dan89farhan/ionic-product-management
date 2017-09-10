import { ProductsPage } from './../products/products';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserData } from './../../providers/user-data';

import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserOptions } from './../../interfaces/user-options';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';





@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public registrationForm: any;

  register: UserOptions = { mobile: '', password: '', email: '', firstName: '', lastName: '' };
  submitted = false;
  regForm: FormGroup;



  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public userData: UserData, private fire: AngularFireAuth, public alertCtrl:AlertController) {
    this.regForm = formBuilder.group({
      ctrlfirstName: ['', Validators.required],
      ctrllastName: ['', Validators.required],
      ctrlpassword: ['', Validators.compose([
        Validators.minLength(6), Validators.required
      ])],
      // ctrlcpassword: ['', Validators.required],
      ctrlemail: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      ctrlmobile: ['', Validators.compose([
        Validators.required, Validators.minLength(10), Validators.maxLength(10)
      ])]

    }
      // , {validator: this.matchingPasswords('ctrlpassword', 'ctrlcpassword')}
    );
    
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    // TODO maybe use this https://github.com/yuyang041060120/ng2-validation#notequalto-1
    return (group: FormGroup): { [key: string]: any } => {

      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        console.log(password.value + " Value of password");
        console.log(confirmPassword.value + " Value of cpassword");

        return {

          mismatchedPasswords: true
        };
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  showAlert(alertMssg) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: alertMssg,
      buttons: ['OK']
    });
    alert.present();
  }

  onRegister(form: NgForm) {
    console.log('in Onregister');
    this.submitted = true;
    if (form.valid) {

      this.register.firstName = this.regForm.controls['ctrlfirstName'].value;
      this.register.lastName = this.regForm.controls['ctrllastName'].value;
      this.register.email = this.regForm.controls['ctrlemail'].value;
      this.register.password = this.regForm.controls['ctrlpassword'].value;
      this.register.mobile = this.regForm.controls['ctrlmobile'].value;
      
      this.fire.auth.createUserWithEmailAndPassword(this.register.email, this.register.password).then((data) => {
        
        this.userData.signup(this.register);
        this.navCtrl.setRoot(ProductsPage);

      }).catch((error) => {
        console.log('Error '+ error.stack);
        
        this.showAlert(error);
      });
      
    }
    else {
      console.log(form.errors);
    }
  }

}
