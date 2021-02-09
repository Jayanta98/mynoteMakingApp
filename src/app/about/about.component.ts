import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private myser:MyserviceService, private router: Router) { }

  listdata=this.myser.allData;

  ngOnInit(): void {
  }
  deleteToDo(myid){
   
    
    this.myser.deleteModelserviceMethod(myid);
    this.router.navigate(['/home']);
  
  }

}
