import { UserData } from './../../providers/user-data';
import { ReportOptions } from './../../interfaces/report-options';
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

  productOptions: ReportOptions = {id: 0, email: '' ,date: '' ,title: '', qty: 0, price: 0, cost: 0};

  productDatas: object[] = [];
  _productSubsciption;

  quantity: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public productDetails: ProductData, public db: AngularFireDatabase, private userData: UserData ) {
    this._productSubsciption = this.db.list('/product').subscribe((data) => {
      this.productDatas = data;
      for (var index = 0; index < this.productDatas.length; index++) {
        
        this.quantity.push(0);
        
      }
      
      // console.log('data is '+ this.productDatas);
    });
    this.userData.getemail().then((value) => {
      this.db.list('/userReport/' + value).subscribe((data)=> {
        this.productOptions.id = data.length;
        this.productOptions.id++;
        console.log(data.length, "Length");
      })
      
    })
    
    //this.productDatas = this.productDetails.productData;
    //console.log(this.productDatas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  

  increament(index){
    
    
    if(this.productDatas[index]['quantity']>this.quantity[index]){
      // this.productDatas[index]['quantity']++;
      this.quantity[index]++;
      
      
    }

  }

  decrement(index){
    if(this.quantity[index]>1){
      // this.productDatas[index]['quantity']--;
      this.quantity[index]--;
    }
  }
  

  showReport(){
    this.navCtrl.push(ReportPage);
  }
  showProfile(){
    this.navCtrl.push(ProfilePage);
  }

  goAddress(index){
    //console.log(this.productDatas[index], "Values");
    this.userData.getemail().then((value) => {
      this.productOptions.email = value;

      this.productOptions.date = this.formatDate(new Date());
      this.productOptions.title = this.productDatas[index]['header'];
      this.productOptions.qty = this.productDatas[index]['quantity'];
      this.productOptions.price = this.productDatas[index]['price'];
      this.productOptions.cost = this.productOptions.qty * this.productOptions.price;
      //this.productOptions = this.productDatas[index];
  
      console.log("The value is ", this.productOptions);
      
      this.db.object('/userReport/' + this.productOptions.email+'/'+this.productOptions.id ).set({
        title: this.productOptions.title,
        date: this.productOptions.date,
        qty: this.productOptions.qty,
        price: this.productOptions.price,
        cost: this.productOptions.cost,
      }).then((value) => {
        console.log("Data entered successfully!", value);
      }).catch(( error ) => {
        console.log("Error ", error);
      });
  
      this.navCtrl.push(AddressPage, this.productOptions);

    }).catch((error) => {
      console.log("Error in goAddress ", error);
      
    })

    
  }

  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

}
