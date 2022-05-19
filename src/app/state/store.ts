import { Task } from "../task.model";
import { Store, StoreConfig } from "@datorama/akita";
import { Injectable } from "@angular/core";
export interface TaskState {
    tasks: Task[];
    isLoaded: boolean;
}



export const getInitialState = () => {
    return {
        tasks: [],
        isLoaded: false,
    };
};

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'task' })

export class TaskStore extends Store<TaskState>{

    constructor() {
        super(getInitialState());
    }
}