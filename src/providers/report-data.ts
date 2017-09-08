import { ReportOptions } from './../interfaces/report-options';

import { Injectable } from '@angular/core';

@Injectable()
export class ReportData{
    
    productCart: object[] = [];
    constructor(){
        this.productCart = [
            {
                date: '8/09/2017',
                products: [
                    {
                        title: 'Bisleri 1 litre',
                        qty: 2,
                        price: 20,
                        cost: 40
                    },
                    {
                        title: 'Bisleri 2 litre',
                        qty: 2,
                        price: 20,
                        cost: 40
                    }
                ]
            }
            ,
            {
                    date: '9/09/17',
                    products: [
                    {
                        title: 'Bisleri 3 litre',
                        qty: 2,
                        price: 20,
                        cost: 40
                    },
                    {
                        title: 'Bisleri 4 litre',
                        qty: 2,
                        price: 20,
                        cost: 40
                    },
                    {
                        title: 'Bisleri 5 litre',
                        qty: 2,
                        price: 20,
                        cost: 40
                    }
                    
                ]
            }
        ];
    }

    
}