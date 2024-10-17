import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  private http = inject(HttpClient);
  constructor() {}

  ngOnInit() {
    this.getAllTasks();
  }


  getAllTasks() {

    this.http.get<Task[]>('http://localhost:3000/tasks').subscribe({
      next: (data) => {
        this.tasks = data;
      },
      error: (error) => {
        console.error('Error fetching tasks:', error);
      },
    });
  }

  completionTask(task: Task) {
    task.completed = !task.completed;
  }
}
