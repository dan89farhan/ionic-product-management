import { AddressData } from './../../providers/address-data';


import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
  public registrationForm: any;


  submitted = false;
  addForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public addressDate: AddressData) {
    this.addForm = formBuilder.group({
      ctrladdress: ['', Validators.required],
      ctrlcity: ['', Validators.required],
      ctrlstate: ['', Validators.compose([
        Validators.minLength(6), Validators.required
      ])],
      // ctrlcpassword: ['', Validators.required],
      ctrlzipcode: ['', Validators.compose([
        Validators.required, Validators.minLength(6)
      ])],
      ctrlcountry: ['', Validators.compose([
        Validators.required
      ])]

    }
      // , {validator: this.matchingPasswords('ctrlpassword', 'ctrlcpassword')}
    );
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }

  onAddress(form: NgForm) {
    console.log('in onAddress');
    this.submitted = true;
    if (form.valid) {
      console.log(this.addForm.controls['ctrlcity'].value);
      var address = this.addForm.controls['ctrladdress'].value;
      var city = this.addForm.controls['ctrlcity'].value
      var state = this.addForm.controls['ctrlstate'].value
      var zipcode = this.addForm.controls['ctrlzipcode'].value
      var country = this.addForm.controls['ctrlcountry'].value
      this.addressDate.setAddress(address, city, state, zipcode, country);
      console.log('successful');

      console.log('print the data ' + this.addressDate.getAddressDate());


    }
    else {
      console.log(form.errors);
    }
  }
}
