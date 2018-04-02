import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FooddetailTestService {

    db:AngularFireDatabase;
    constructor() { }

    fooddetailSave(upload) {
      console.log("Complete 100");

      this.db.database.ref('/fooddetails').child(upload.UUID).set(upload);
    }

  }
