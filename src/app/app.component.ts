import { Component, OnInit } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}
interface Set {
  sendTo: string;
  taskToSend: Task;
}

const tasks = [
  { name: 'Skontaktować się z zespołem marketingu', completed: false },
  { name: 'Zbudować prezentację na spotkanie z inwestorami', completed: false },
  { name: "Ukończyć implementację pierwszego milestone'a", completed: false },
  { name: 'Przygotować analizę projektu', completed: true },
  { name: 'Utworzyć spotkanie - kickoff projektu', completed: true },
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  type1: String = 'Ukończone';

  type2: String = 'Do zrobienia';

  remainingTasks: Task[];
  completedTasks: Task[];
  currentCompletedTasksValue: number;
  currentRemainingTasksValue: number;

  ngOnInit() {
    this.remainingTasks = tasks.filter((t) => !t.completed);
    this.completedTasks = tasks.filter((t) => t.completed);
    this.currentRemainingTasksValue = this.remainingTasks.length;
    this.currentCompletedTasksValue = this.completedTasks.length;
  }

  addItem(newItem: Task) {
    console.log(newItem);
    this.remainingTasks.push(newItem);
    this.currentRemainingTasksValue = this.remainingTasks.length;
    this.currentCompletedTasksValue = this.completedTasks.length;
  }

  updateTasks(typeAndTask: Set) {
    switch (typeAndTask.sendTo) {
      case 'remaining':
        this.moveToRemaining(typeAndTask.taskToSend);
        console.log('added remaining');
        break;
      case 'completed':
        this.moveToCompleted(typeAndTask.taskToSend);
        break;
      default:
        break;
    }
    this.currentRemainingTasksValue = this.remainingTasks.length;
    this.currentCompletedTasksValue = this.completedTasks.length;
  }

  moveToRemaining(task: Task) {
    this.completedTasks = [
      ...this.completedTasks.filter((t) => t.name !== task.name),
    ];
    this.remainingTasks.push(task);
  }

  moveToCompleted(task: Task) {
    this.remainingTasks = [
      ...this.remainingTasks.filter((t) => t.name !== task.name),
    ];
    console.log('removed from remaining');

    this.completedTasks.push(task);
    console.log('added to completed');
  }
}
