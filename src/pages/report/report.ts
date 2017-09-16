import { AngularFireDatabase } from 'angularfire2/database';
import { UserData } from './../../providers/user-data';
import { ReportOptions } from './../../interfaces/report-options';

import { ReportData } from './../../providers/report-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  // productCarts: object[] = [];
  reportOptions: ReportOptions = {
    id: 0,
    email: '',
    date: '',
    title: '',
    qty: 0,
    price: 0,
    cost: 0
  };

  productCarts: ReportOptions[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public reportData: ReportData, private userDate: UserData, private db: AngularFireDatabase) {

    this.userDate.getemail().then((value) => {
      this.reportOptions.email = value;
      this.db.object('/userReport/'+ this.reportOptions.email, { preserveSnapshot: true }).subscribe((datas) => {
        
        //this.reportOptions = datas.val();
        //this.reportOptions.email = datas.key;
        this.productCarts = datas.val();
        this.productCarts.shift();
        console.log("Value is ", this.productCarts );
        
      })
    }).catch((error) => {
      console.log("Error ", error);
      
    });
    // this.productCarts = this.reportData.productCart;
    // console.log(this.productCarts);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

}
