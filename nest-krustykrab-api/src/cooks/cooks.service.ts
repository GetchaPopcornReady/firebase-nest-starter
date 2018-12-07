import { Injectable } from '@nestjs/common';
import { Cook } from './cook.interface';  //importing the cook object
import { CreateCookDto } from './create-cook.dto';

var Firebase = require('firebase');

Firebase.initializeApp({

  databaseURL: "https://node-project-8badf.firebaseio.com/",
  serviceAccount: './firebase-info.json', //this is file that I downloaded from Firebase Console

});

var db = Firebase.database();

var cooksRef = db.ref("cooks");


@Injectable()
export class CooksService {
  //private readonly cooks: Cook[] = [];  //array of cooks rather than strings

  async findAll(): Promise<String> {
    var x;
    console.log("x begins: " + x);
    var snapshot = await cooksRef.once('value');
    x = JSON.stringify(snapshot.val())
    console.log("x is: " + x);
    return x;
  }



  create(cook: Cook) {

    console.log("cook name: " + cook.name);
    console.log("cook age: " + cook.age);

    var key:String = this.generateKey();

    cooksRef.child(key).set({
      name: cook.name,
      age: cook.age
    });

    //this.cooks.push(cook);  //adding the cook to the array
  }

  generateKey(): String{
    var key = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (var i = 0; i < 10; i++){
      key += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  
    return key;
  }

}