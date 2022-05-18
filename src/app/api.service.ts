import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task } from "./task.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private readonly baseUrl = environment.baseUrl;
    constructor(private http: HttpClient) { }
    addTask(name: string, description: string): Observable<Task> {
        return this.http.post<Task>(this.baseUrl, { name, description });
    }
    getTasks(): Observable<Task[]> {
        return this.http.get<{ data: Task[] }>(this.baseUrl).pipe(map((res) => res.data));
    }
    deleteTask(id: string): Observable<Task> {
        return this.http.delete<Task>(`${this.baseUrl}${id}`);
    }
    editTask(id:string,changes:Task):Observable<Task>{
        return this.http.put<Task>(`${this.baseUrl}${id}`,changes);
    }
}