import { ProductsPage } from './../products/products';
import { UserData } from './../../providers/user-data';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AddressOptions } from './../../interfaces/address-options';
import { AddressData } from './../../providers/address-data';


import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

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

  addressdetails: AddressOptions = {address: '', city: '', state: '', zipcode: 0, country: ''};
  submitted = false;
  addForm: FormGroup;

  addressObj: FirebaseObjectObservable<any>;

  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public addressData: AddressData, private db: AngularFireDatabase, private userData: UserData, public toastCtrl: ToastController) {
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
      
    );

    var email = this.userData.getemail();
    email.then((value) => {
      this.db.object('/userAddress/'+value, { preserveSnapshot: true }).subscribe((datas) => {

        console.log("Value of data ",datas);
        
        if(datas.val() != null){
          this.addressdetails = datas.val();
          console.log("Address details ", this.addressdetails);
        }
        
          
        
      });
      
    });
  }

  ionViewWillLeave(){
    this.navCtrl.setRoot(ProductsPage);
  }


  showToast(message: string){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }

  onAddress(form: NgForm) {
    console.log('in onAddress');
    this.submitted = true;
    if (form.valid) {
      // console.log(this.addForm.controls['ctrlcity'].value);
      this.addressdetails.address = this.addForm.controls['ctrladdress'].value;
      this.addressdetails.city = this.addForm.controls['ctrlcity'].value
      this.addressdetails.state = this.addForm.controls['ctrlstate'].value
      this.addressdetails.zipcode = this.addForm.controls['ctrlzipcode'].value
      this.addressdetails.country = this.addForm.controls['ctrlcountry'].value
      this.addressData.setAddress(true);

      this.userData.getemail().then((value) => {
        this.email = value;

        this.db.object('/userAddress/'+this.email).set({
          address: this.addressdetails.address,
          city: this.addressdetails.city,
          state: this.addressdetails.state,
          zipcode: this.addressdetails.zipcode,
          country: this.addressdetails.country
          
        }).then((data) => {
          console.log("Successfully inserted the data ", data);
          this.showToast("Thank you! your order will be deliver in next 2 days.");
          this.navCtrl.setRoot(ProductsPage);
        }).catch((error) => {
          this.showToast(error+'');
        });

      });
      
      //console.log('email is ', this.email);
      

    }
    else {
      console.log(form.errors);
    }
  }
}
