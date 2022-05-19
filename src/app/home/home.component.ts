
import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, switchMap, take } from 'rxjs';
import { ApiService } from '../api.service';
import { TaskQuery } from '../state/query';
import { TaskStore } from '../state/store';
import { Task } from '../task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;
  tasks: Task[] = [];
  constructor(private router: Router, private taskQuery: TaskQuery, private taskStore: TaskStore, private apiService: ApiService) { }
  addTask() {
    this.router.navigateByUrl('/addtask');
  }
  ngOnInit(): void {
    this.taskQuery.getLoading().subscribe(res => this.loading = res);
    this.taskQuery.getTasks().subscribe(res => this.tasks = res);
    this.taskQuery.getLoaded().pipe(
      take(1),
      filter(res => !res),
      switchMap(() => {
        this.taskStore.setLoading(true);
        return this.apiService.getTasks();
      })
    ).subscribe((res => {
      this.taskStore.update(state => {
        return {
          todos: res,
          isLoaded: true,
        };
      });
      this.taskStore.setLoading(false);
    }),( err => {
      console.log(err);
      this.taskStore.setLoading(false);
    }));

  }

}
