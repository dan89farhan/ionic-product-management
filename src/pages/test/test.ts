import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the TestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  testFormGroup: FormGroup;

  submitted: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.testFormGroup = formBuilder.group({
      emailCntl: ['', Validators.compose([Validators.email, Validators.required ])],
      password: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
