import { ReportData } from './../providers/report-data';
import { ReportPage } from './../pages/report/report';
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

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireDatabaseModule } from 'angularfire2/database';

const fireBaseAuth = {
  apiKey: "AIzaSyC3eJ2X2_UTYkxaopXWb9VDTPyNDlI7t7Y",
  authDomain: "productmanagement-78166.firebaseapp.com",
  databaseURL: "https://productmanagement-78166.firebaseio.com",
  projectId: "productmanagement-78166",
  storageBucket: "productmanagement-78166.appspot.com",
  messagingSenderId: "929512610217"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    TestPage,
    ProductsPage,
    AddressPage,
    ReportPage
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp, {}, {
      links:[
        {
          component: HomePage, name: 'HomePage', segment: 'home-page'
        },
        {
          component: LoginPage, name: 'LoginPage', segment: 'login-page'
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
        },
        {
          component: ReportPage, name: 'ReportPage', segment: 'report-page'
        }
      ]
    }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(fireBaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    TestPage,
    ProductsPage,
    AddressPage,
    ReportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserData,
    ProductData,
    AddressData,
    ReportData
  ]
})
export class AppModule {}
