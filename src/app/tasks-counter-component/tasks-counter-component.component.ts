import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tasks-counter-component',
  templateUrl: './tasks-counter-component.component.html',
  styleUrls: ['./tasks-counter-component.component.css'],
})
export class TasksCounterComponentComponent implements OnInit, OnChanges {
  @Input() typeoftasks: string = '';
  @Input() compleatedValue: number;
  @Input() remainingValue: number;
  valueOfSelectedKindOfTasks: number;

  constructor() {}
  ngOnInit() {
    this.valueOfSelectedKindOfTasks =
      this.typeoftasks === 'Do zrobienia'
        ? this.remainingValue
        : this.compleatedValue;
  }
  ngOnChanges() {
    this.valueOfSelectedKindOfTasks =
      this.typeoftasks === 'Do zrobienia'
        ? this.remainingValue
        : this.compleatedValue;
  }
}
