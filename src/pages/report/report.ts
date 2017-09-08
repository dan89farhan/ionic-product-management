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

  productCarts: object[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public reportData: ReportData) {
    this.productCarts = this.reportData.productCart;
    console.log(this.productCarts);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

}
