import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class RiderTestService {

    db:AngularFireDatabase;
    constructor() { }

    riderSave(upload) {
      console.log("Complete 100");

      this.db.database.ref('/riders').child(upload.UUID).set(upload);
    }

  }
