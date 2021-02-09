import { Model } from './Model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  allData= new Array<Model>();
  element1:Model = {id: 1, tname:"Reading the Book", task: "I have to read the book on the Angular Js", mydate: "11-01-2021"};
  element2 :Model= {id: 2,tname:"Lunch at Rrestaurant ", task: "I have to go to kolkata BhojoHori Manna Restaurant for my Lunch ", mydate: "11/7/8"};
  element3:Model = {id: 3,tname:"Movie with Friends", task: "We have to go to the theater for Movie", mydate: "15-01-2021"};
  element4:Model = {id: 4, tname:"Going to Park Street",task: "We will go Park street with my school friends", mydate: "17-01-2021"};




  constructor() {
    this.allData.push(this.element1);
    this.allData.push(this.element2);
    this.allData.push(this.element3);
    this.allData.push(this.element4);


   }

  addModelserviceMethod(modelData:Model){
    this.allData.push(modelData);
    return "Data Added successfully";

  }

  updateDataAll:Model[] = this.allData
  deleteModelserviceMethod(modelid){
   this.allData= this.allData.filter((x)=>{
     
     return x.id!=modelid;
   })
  

  }


}
