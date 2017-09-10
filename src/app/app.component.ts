import { ProductsPage } from './../pages/products/products';
import { UserData } from './../providers/user-data';
import { HomePage } from './../pages/home/home';

import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public userData: UserData) {

    this.userData.checkHasSeenTutorial().then((value )=>{
      if (value){
        this.userData.checkHasLogin().then((data) => {
          if(data){
            this.rootPage = ProductsPage;
          }
          else{
            this.rootPage = LoginPage;
          }
        });
        
      }
      else{
        this.rootPage = HomePage;
      }
    });
    
    
    

      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      });

      //console.log(val);
  }
}

