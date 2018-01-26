import { Component } from '@angular/core';
import {FirstComponent} from './first/first.component';
import { LoginService } from './Services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'islam M. Elbadawy';
  name:string;
  password:string;
  constructor(private mylogin:LoginService){
    //var first = this.mylogin.login("admin" , "admin2");
    //var seconde = this.mylogin.login("admin" , "admin");

    //console.log(first,seconde);
    //console.log(this.name);
    
    }
    /*show(){
      console.log(this.name);
  }
  select(){
    console.log("You have selected an element");
  }
  blur(){
    console.log("You have lost focus")
  }
  focus(){
    console.log("you have focus");
  }*/

  login(){
    var result= this.mylogin.login(this.name , this.password);
    console.log(result);
  }
}
