import { Component, Input } from '@angular/core';

@Component ({
    selector : 'app-counting',
    templateUrl: './counting.component.html',
    styleUrls: ['./counting.component.css']
})
export class CountingComponent{
    
    @Input()
    keyword!: string;

    constructor() {}

    count = 0;
    countNumber(){
        this.count = this.count + 5 ;
    }
    
}