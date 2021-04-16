import { Component, Input } from '@angular/core' ;
    
    @Component ( {
        selector : 'app-home',
        templateUrl : './home.component.html' 
        
    } )

    export class HomeComponent {

        @Input()
        title!: string; 
        //title = '';
        
        constructor() {}
        count = 0;
        countNumber(){
            this.count =this.count + 1
        }
    }
