import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form=new FormGroup({
      name: new FormControl(null,[Validators.required]),
      detail: new FormControl(null,[Validators.required]),
  });}
  addTask(){
    console.log(this.form.value);
    
  }
}
