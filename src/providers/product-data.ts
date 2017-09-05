

import { Injectable } from '@angular/core';

@Injectable()
export class ProductData {
    messages: object[] = [];
    constructor() {
        this.messages = [
            {
                img: '../../assets/img/1l.png',
                header: 'Bisleri 1 Litre',
                price: 'Rs. 29',
                details: 'Organized water, minerals (magnesium sulphate, potassium and carbonate).',
                quantity: 0,
            },
            {
                img: '../../assets/img/2l.png',
                header: 'Bisleri 2 Litre',
                price: 'Rs. 48',
                details: 'Organized water, minerals (magnesium sulphate, potassium and carbonate).',
                quantity: 0,
            },
            {
                img: '../../assets/img/5l.png',
                header: 'Bisleri 5 Litre',
                price: 'Rs. `145`',
                details: 'Organized water, minerals (magnesium sulphate, potassium and carbonate).',
                quantity: 0,
            },
            {
                img: '../../assets/img/20l.png',
                header: 'Bisleri 20 Litre',
                price: 'Rs. 3000',
                details: 'Organized water, minerals (magnesium sulphate, potassium and carbonate).',
                quantity: 0,
            },
            {
                img: '../../assets/img/250.png',
                header: 'Bisleri 250ml',
                price: 'Rs. 8',
                details: 'Organized water, minerals (magnesium sulphate, potassium and carbonate).',
                quantity: 0,
            },
            {
                img: '../../assets/img/300.png',
                header: 'Bisleri 300ml',
                price: 'Rs. 10',
                details: 'Organized water, minerals (magnesium sulphate, potassium and carbonate).',
                quantity: 0,
            },
            {
                img: '../../assets/img/500.png',
                header: 'Bisleri 500ml',
                price: 'Rs. 15',
                details: 'Organized water, minerals (magnesium sulphate, potassium and carbonate).',
                quantity: 0,
            }
        ];
        //console.log('object is ', this.messages[0]['img']);
    }
}