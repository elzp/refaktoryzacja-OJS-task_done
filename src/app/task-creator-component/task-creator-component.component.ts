import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-creator-component',
  templateUrl: './task-creator-component.component.html',
  styleUrls: ['./task-creator-component.component.css'],
})
export class TaskCreatorComponentComponent implements OnInit {
  formModel = {
    newTodo: '',
  };

  @Output() newItemEvent = new EventEmitter<Task>();

  constructor() {}

  ngOnInit() {}
  addNewItem(value: Task) {
    this.newItemEvent.emit(value);
  }

  addTodo() {
    if (!this.formModel.newTodo) {
      alert('Treść nie może być pusta!');
      return;
    }

    this.newItemEvent.emit({
      name: this.formModel.newTodo,
      completed: false,
    });
    this.formModel.newTodo = '';
  }
}
