import { AddressData } from './../providers/address-data';
import { AddressPage } from './../pages/address/address';
import { ProductData } from './../providers/product-data';
import { ProductsPage } from './../pages/products/products';
import { UserData } from './../providers/user-data';
import { TestPage } from './../pages/test/test';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    TestPage,
    ProductsPage,
    AddressPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links:[
        {
          component: LoginPage, name: 'LoginPage', segment: 'loginPage'
        },
        {
          component: RegisterPage, name: 'RegisterPage', segment: 'register-page'
        },
        {
          component: TestPage, name: 'TestPage', segment:'test-page'
        },
        {
          component: ProductsPage, name: 'ProductPage', segment: 'product-page'
        },
        {
          component: AddressPage, name: 'AddressPage', segment: 'address-page'
        }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    TestPage,
    ProductsPage,
    AddressPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserData,
    ProductData,
    AddressData
  ]
})
export class AppModule {}
