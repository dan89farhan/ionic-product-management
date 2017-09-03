import { UserData } from './../../providers/user-data';
import { LoginPage } from './../login/login';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserOptions } from './../../interfaces/user-options';

import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';





@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public registrationForm : any;
  
  register: UserOptions = { username:'', password:'', email: '', firstName: '', lastName: ''};
  submitted = false;
  regForm: FormGroup;

  

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder, public userData: UserData ) {
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
    return (group: FormGroup): {[key: string]: any} => {
      
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
      
      if (password.value !== confirmPassword.value) {
        console.log(password.value+" Value of password");
        console.log(confirmPassword.value+" Value of cpassword");
        
        return {
          
          mismatchedPasswords: true
        };
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onRegister(form: NgForm){
    console.log('in Onregister');
    this.submitted = true;
    if(form.valid){
      this.userData.signup(form.controls['ctrlemail'].value);
      console.log(this.userData.getUsername().then((username) => {
        console.log(username);
      }) );
      //this.navCtrl.push(LoginPage);
    }
    else{
      console.log(form.errors);
    }
  }

}
