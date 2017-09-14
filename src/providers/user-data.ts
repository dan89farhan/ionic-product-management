import { UserOptions } from './../interfaces/user-options';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Injectable } from '@angular/core';

@Injectable()
export class UserData {
    HAS_LOGGED_IN = 'hasLoggedIn';
    HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    
    userDetails: UserOptions = {mobile: '', password: '', email: '', firstName: '', lastName: '' };
    constructor(public events: Events, public storage: Storage) {

    }

    login(email: string): void {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setemail(email);
        //this.events.publish('user:login');
    };


    setemail(email: string): void {
        email = email.replace('.', '_');
        this.storage.set('email', email);
    };

    

    signup(email: string): void {
        console.log(email+' this is email');
        this.storage.set(this.HAS_LOGGED_IN, true);
        //this.events.publish('user:signup');
        this.setemail(email);
    };

    getemail(): Promise<string> {
        return this.storage.get('email').then((value) => {
            return value;
        });
    };

    hasSeenTutorial(){
        this.storage.set(this.HAS_SEEN_TUTORIAL, true);
    }

    checkHasSeenTutorial() {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
            console.log('in checkHasSeenTutorial is '+ value);
            return value;
        });
    }

    checkHasLogin(){
        return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
            return value;
        });
    }

    logOut(): Promise<boolean>{
        return this.storage.set(this.HAS_LOGGED_IN, false).then((value) => {
            console.log(value, "this is in logOut");
            return value;
        });
    }
}