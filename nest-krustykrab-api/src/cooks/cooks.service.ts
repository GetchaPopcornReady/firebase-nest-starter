import { Injectable } from '@nestjs/common';
import { Cook } from './cook.interface';  //importing the cook object
var Firebase = require('firebase');

Firebase.initializeApp({

  databaseURL: "https://node-project-8badf.firebaseio.com/",

  serviceAccount: './firebase-info.json', //this is file that I downloaded from Firebase Console

});

var db = Firebase.database();

var cooksRef = db.ref("cooks");

@Injectable()
export class CooksService {
  private readonly cooks: Cook[] = [];  //array of cooks rather than strings

  
  findAll(): Cook[] {

    cooksRef.on("value", function(snapshot) {
      console.log(snapshot.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

    return this.cooks;
  }

  create(cook: Cook) {

    console.log("cook name: " + cook.name);
    console.log("cook age: " + cook.age);

    cooksRef.child(cook.name).set({
      name: cook.name,
      age: cook.age
    });

    this.cooks.push(cook);
  }
}