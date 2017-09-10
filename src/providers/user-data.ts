import { UserOptions } from './../interfaces/user-options';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Injectable } from '@angular/core';

@Injectable()
export class UserData {
    HAS_LOGGED_IN = 'hasLoggedIn';
    HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    USER_DETAILS = 'userDetails';
    userDetails: UserOptions = {mobile: '', password: '', email: '', firstName: '', lastName: '' };
    constructor(public events: Events, public storage: Storage) {

    }

    login(): void {
        this.storage.set(this.HAS_LOGGED_IN, true);
        //this.events.publish('user:login');
    };


    setemail(email: string): void {
        this.storage.set('email', email);
    };

    setUserDetails(userOption: UserOptions){
        this.storage.set(this.USER_DETAILS, userOption);
    }

    signup(userOption: UserOptions): void {
        console.log(userOption.email+' this is email');
        this.storage.set(this.HAS_LOGGED_IN, true);
        
        
        this.setUserDetails(userOption);
        //this.events.publish('user:signup');
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
}