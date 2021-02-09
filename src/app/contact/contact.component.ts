import { Component, OnInit } from '@angular/core';
import { Model } from '../Model';
import { MyserviceService } from '../myservice.service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private myser:MyserviceService,private router: Router) { }

  listdata=this.myser.allData;
  todoModel:Model=new Model();

  ngOnInit(): void {
  }
  response="";
  AddTodo(){
    if( this.todoModel.tname==null || this.todoModel.task==null || this.todoModel.mydate==null){
      alert("Please fill the ToDo Form correctly");
    }
    else{
      this.todoModel.id=Math.random()
      this.response= this.myser.addModelserviceMethod(this.todoModel);
       this.router.navigate(['/about']);
     
    }
    
  }

}
