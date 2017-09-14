import { AngularFireDatabase } from 'angularfire2/database';
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

  messages:object[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public db: AngularFireDatabase) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
    this.db.object('/userInfo/h' ).set({
      
      name: 'farhan'



    }).then(() => {

    }).catch((error) => {
      
    });

  }

}
