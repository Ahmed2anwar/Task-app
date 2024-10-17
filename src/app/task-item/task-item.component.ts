import { Component, Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() task: any;
  @Output() toggleTaskCompletion = new EventEmitter<any>();



  onTaskClick(task: any) {
    this.toggleTaskCompletion.emit(task);
  }

}
