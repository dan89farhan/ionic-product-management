import { Storage } from '@ionic/storage';
import { AddressOptions } from './../interfaces/address-options';

import { Injectable } from '@angular/core';

@Injectable()
export class AddressData{

    HAS_FILLED_ADDRESS = 'hasFilledAddress';

    addressOptions: AddressOptions = {address: '', city: '', state: '', zipcode: 0, country: ''};
    constructor(public storage: Storage ){
        
    }

    setAddress(address: string, city: string, state: string, zipcode: number, country: string){
        this.storage.set(this.HAS_FILLED_ADDRESS, true);
        this.addressOptions.address = address;
        this.addressOptions.city = city;
        this.addressOptions.country = country;
        this.addressOptions.state = state;
        this.addressOptions.zipcode = zipcode;
        var obj = JSON.stringify(this.addressOptions);
        
        this.storage.set('addressStrored', obj).then((value) => {
            console.log('successful stored');
            
        }).catch((error) =>{
            console.log(error+' is the error');
            
        });

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
