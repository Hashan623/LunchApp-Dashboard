import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FoodtypeTestService {

    db:AngularFireDatabase;
    constructor() { }

    foodtypeSave(upload) {
      console.log("Complete 100");

      this.db.database.ref('/foodtypes').child(upload.UUID).set(upload);
    }

  }

