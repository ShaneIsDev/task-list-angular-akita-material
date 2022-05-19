import { Query } from "@datorama/akita";
import { Observable } from "rxjs";
import { TaskStore, TaskState } from "./store";
import { Task } from "../task.model";



export class TaskQuery extends Query<TaskState>{
    constructor(private taskStore: TaskStore) {
        super(taskStore);
    }

    getTask(): Observable<Task[]> {
        return this.select(state => state.tasks);
    }

    getLoaded(): Observable<boolean> {
        return this.select(state => state.isLoaded);
    }

    getLoading(): Observable<boolean> {
        return this.selectLoading();
    }
}