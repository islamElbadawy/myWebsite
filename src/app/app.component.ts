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
  constructor(private mylogin:LoginService){
    var first = this.mylogin.login("admin" , "admin2");
    var seconde = this.mylogin.login("admin" , "admin");

    console.log(first,seconde);
  }
}
