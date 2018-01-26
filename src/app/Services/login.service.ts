import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  login (user , pass){
    if(user=="admin" && pass=="admin"){
      return true;
    }
    else{
      return false;
    }
  }
  load(){
    var data[];
    for(let i=0;i<10;i++){
      var item ={id:i , name:"name"+1};
      data.push(item);
    }
    return data ;

  }

}
