import { Injectable } from '@nestjs/common';
import { Cook } from './cook.interface';  //importing the cook object
var Firebase = require('firebase');


@Injectable()
export class CooksService {
  private readonly cooks: Cook[] = [];  //array of cooks rather than strings
  
  findAll(): Cook[] {

    Firebase.initializeApp({

      databaseURL: "https://node-project-8badf.firebaseio.com/",
    
      serviceAccount: './firebase-info.json', //this is file that I downloaded from Firebase Console
    
    });
  
  var db = Firebase.database();
  
  var usersRef = db.ref("users");

  usersRef.child("alanisawesome").set({
    date_of_birth: "June 23, 1955",
    full_name: "Alan Turing"
  });

    return this.cooks;
  }

  create(cook: Cook) {


    this.cooks.push(cook);
  }
}