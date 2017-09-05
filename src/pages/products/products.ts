import { AddressPage } from './../address/address';
import { ProductData } from './../../providers/product-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  //productDetails: ProductData;
  messages: object[] = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public productDetails: ProductData) {
    this.messages = this.productDetails.messages;
    //console.log(this.messages);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  increament(index){
    //this.messages[index][quantity];
    this.messages[index]['quantity']++;
    console.log();
  }

  decrement(index){
    (this.messages[index]['quantity']>0) ? this.messages[index]['quantity']--: this.messages[index]['quantity'];
    
  }
  goAddress(index){
    console.log(index);
    this.navCtrl.push(AddressPage, index);
  }
 
}
