import { Storage } from '@ionic/storage';
import { AddressOptions } from './../interfaces/address-options';

import { Injectable } from '@angular/core';

@Injectable()
export class AddressData{

    HAS_FILLED_ADDRESS = 'hasFilledAddress';

    addressOptions: AddressOptions = {address: '', city: '', state: '', zipcode: 0, country: ''};
    constructor(public storage: Storage ){
        
    }

    setAddress(value: boolean){
        this.storage.set(this.HAS_FILLED_ADDRESS, value);
    }

    checkAddressFilled(): Promise<boolean>{
        return this.storage.get(this.HAS_FILLED_ADDRESS).then((value) => {
            return value === true;
        });
    }
    getAddressData(){
        return this.storage.get('addressStrored').then((value) => {
            //this.addressOptions = JSON.parse(value);
            return value;
        }).catch((error) => {
            console.log("error occured "+error);
            return error;
        });
    }
    getData(){
        return this.storage.get('addressStrored');
    }
}
