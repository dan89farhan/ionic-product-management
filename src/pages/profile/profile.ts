import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { UserOptions } from './../../interfaces/user-options';
import { LoginPage } from './../login/login';
import { UserData } from './../../providers/user-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public profileForm: any;

  profile: UserOptions = { mobile: '', password: '', email: '', firstName: '', lastName: '' };

  submitted = false;

  profForm: FormGroup;

  _userSubcription;

  item: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: UserData, public alertCtrl: AlertController,  public formBuilder: FormBuilder, public db: AngularFireDatabase, public toastCtrl: ToastController) {

    this.profForm = formBuilder.group({
      ctrlfirstName: ['', Validators.required],
      ctrllastName: ['', Validators.required],
      ctrlpassword: ['', Validators.compose([
        Validators.minLength(6), Validators.required
      ])],
      // ctrlcpassword: ['', Validators.required],
      ctrlemail: [{value: '', disabled: true}, Validators.compose([
        Validators.required, Validators.email
      ])],
      ctrlmobile: ['', Validators.compose([
        Validators.required, Validators.minLength(10), Validators.maxLength(10)
      ])]

    }
    );
    
    var email = this.userData.getemail();
    email.then((value) => {
      var val = value.replace('.', '_');
      this.item = this.db.object('/userInfo/'+ val);
      this._userSubcription = this.db.object('/userInfo/'+ val, { preserveSnapshot: true }).subscribe(

        (data) => {
          this.profile = data.val();
          this.profile.email = data.key.replace('_', '.');
          console.log(data.val());
        }
      );
      
    }).catch((error) => {
      this.showAlert(error);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  showAlert(alertMssg) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: alertMssg,
      buttons: ['OK']
    });
    alert.present();
  }


  logOut(){
    this.userData.logOut().then((value) => {
      console.log('Printing data ', value);
      if(!value){
        this.navCtrl.setRoot(LoginPage);
      }
    }).catch((error) => {
      this.showAlert(error);
    });
    

  }

  onChangeInfo(profForm: NgForm){
    this.submitted = true;
    if(profForm.valid){
      this.profile.firstName = this.profForm.controls['ctrlfirstName'].value;
      this.profile.lastName = this.profForm.controls['ctrllastName'].value;
      this.profile.password = this.profForm.controls['ctrlpassword'].value;
      this.profile.mobile = this.profForm.controls['ctrlmobile'].value;

      this.item.update({
        firstName: this.profile.firstName,
        lastName: this.profile.lastName,
        password: this.profile.password,
        mobile: this.profile.mobile
      }).then((data)=>{
        console.log('Successfully entered the data!', data);
        this.showToast('Successfully updated the data!');
        
      }).catch((error) => {
        console.log('error found ', error);
      });      

    }
  }

  showToast(message: string){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }
}
