import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { LoginService } from './Services/login.service';
import { SecondeComponent } from './seconde/seconde.component';
import { RouterModule } from '@angular/router';
import { routs } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondeComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpModule,
    RouterModule.forRoot(routs)  
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
