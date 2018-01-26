import { FirstComponent } from "./first/first.component";
import { SecondeComponent } from "./seconde/seconde.component";
import { Routes } from "@angular/router";


export const routs:Routes=[
    {path:'first',component:FirstComponent},
    {path:'seconde',component:SecondeComponent},
    {path:'',component:FirstComponent},
    {path:'**',component:FirstComponent}
] 

