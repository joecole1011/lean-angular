import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class ToDoListComponent  {
  title = 'My Tasks today';
  newTask;
  items = [];

  addclick(){
    if (this.newTask==''){
    }
    else {
      this.items.push(this.newTask);
      this.newTask ='';
    }
  }

public deletetask(index) {
    this.items.splice(index, 1);
}
  constructor() { }

  

}
