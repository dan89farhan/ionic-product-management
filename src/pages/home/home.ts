import { UserData } from './../../providers/user-data';
import { LoginPage } from './../login/login';
import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  imgSrcs: string[] = [];
  imgDescs: string[] = [];
  

  @ViewChild('slides') slides: Slides;

  readonly path: string = 'assets/img/Slide/';
  constructor(public navCtrl: NavController, public userData: UserData) {
    this.imgSrcs = [this.path+"bisleri_pop1.png", this.path+"bisleri-products.png", this.path+"soda.png", this.path+"vedica.png" ];
    this.imgDescs = [
      "Bisleri Pop is bringing you four new, fizzilicious flavours - PinaColada, Spyci, Limonata, and Fonzo! You'll always stay refreshingly happy with every sip and gulp!",
      "Synonymous with mineral water in India, Bisleri comes in various sizes. No matter what your drinking water needs are, You can always count on us!",
      "Made with Bisleri water, Bisleri Soda gives a rocking kick to any drink its combined with. Others call it a drink mixer, we call it the 'Rocktail Mix!'",
      "Born of a clear spring, that gushes out from its Himalayan labyrinth. Vedica is the finest of what life has to offer, taken to another altitude."
      ]
  }
  startApp(){
    this.navCtrl.setRoot(LoginPage).then(() => {
      this.userData.hasSeenTutorial();
    });
  }

  // onSlideChangeStart(slider: Slides) {
  //   this.showSkip = !slider.isEnd();
  // }
  
}
