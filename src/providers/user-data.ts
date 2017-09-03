
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Injectable } from '@angular/core';

@Injectable()
export class UserData {
    HAS_LOGGED_IN = 'hasLoggedIn';

    constructor(public events: Events, public storage: Storage) {

    }

    login(username: string): void {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };


    setUsername(username: string): void {
        this.storage.set('username', username);
    };

    signup(username: string): void {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };

    getUsername(): Promise<string> {
        return this.storage.get('username').then((value) => {
            return value;
        });
    };
}