import { ProfilePage } from './../profile/profile';
import { ReportPage } from './../report/report';
import { AddressPage } from './../address/address';
import { ProductData } from './../../providers/product-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

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

  //productDetails: productDatas;
  productDatas: object[] = [];
  _productSubsciption;

  constructor(public navCtrl: NavController, public navParams: NavParams, public productDetails: ProductData, public db: AngularFireDatabase ) {
    this._productSubsciption = this.db.list('/product').subscribe((data) => {
      this.productDatas = data;
      console.log('data is '+ this.productDatas);
    });

    
    //this.productDatas = this.productDetails.productData;
    //console.log(this.productDatas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  increament(index){
    this.productDatas[index]['quantity']++;
    console.log();
  }

  decrement(index){
    (this.productDatas[index]['quantity']>0) ? this.productDatas[index]['quantity']--: this.productDatas[index]['quantity'];
    
  }
  goAddress(index){
    console.log(index);
    this.navCtrl.push(AddressPage, index);
  }

  showReport(){
    this.navCtrl.push(ReportPage);
  }
  showProfile(){
    this.navCtrl.push(ProfilePage);
  }
 
}
