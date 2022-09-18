import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

interface Set {
  sendTo: string;
  taskToSend: Task;
}
@Component({
  selector: 'app-tasks-list-component',
  templateUrl: './tasks-list-component.component.html',
  styleUrls: ['./tasks-list-component.component.css'],
})
export class TasksListComponentComponent implements OnInit, OnChanges {
  @Input() kindOfTasks = '';
  @Input() currentRemainingTasks = [];
  @Input() currentCompletedTasks = [];
  @Output() sendingTaskEvent = new EventEmitter<Set>();

  currentRemainingTasksValue: number = this.currentRemainingTasks.length;
  currentCompletedTasksValue: number = this.currentCompletedTasks.length;
  currentListOfTasks: Task[];
  label: string;
  ifCompleted: string;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.currentListOfTasks =
      this.kindOfTasks === 'Ukończone'
        ? this.currentCompletedTasks
        : this.currentRemainingTasks;
    this.updateValuesOfTasks();
  }

  ngOnInit() {
    this.currentListOfTasks =
      this.kindOfTasks === 'Ukończone'
        ? this.currentCompletedTasks
        : this.currentRemainingTasks;
    this.label =
      this.kindOfTasks === 'Ukończone' ? 'Do zrobienia' : 'Ukończono';
    this.ifCompleted = this.kindOfTasks === 'Ukończone' ? 'task-done' : '';
    this.updateValuesOfTasks();
  }
  updateValuesOfTasks() {
    this.currentRemainingTasksValue = this.currentRemainingTasks.length;
    this.currentCompletedTasksValue = this.currentCompletedTasks.length;
    console.log('updated list component');
  }
  moveTo(task: Task) {
    switch (this.kindOfTasks) {
      case 'Ukończone':
        const filteredComplited = this.currentCompletedTasks.filter(
          (t) => t.name !== task.name
        );
        this.currentCompletedTasks = filteredComplited;
        this.sendingTaskEvent.emit({
          sendTo: 'remaining',
          taskToSend: { completed: false, ...task },
        });
        console.log('remaining');
        break;
      case 'Do zrobienia':
        this.sendingTaskEvent.emit({
          sendTo: 'completed',
          taskToSend: { completed: true, ...task },
        });
        console.log('completed');
        break;
      default:
        break;
    }
  }
}
