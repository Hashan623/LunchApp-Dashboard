import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class OutletTestService {

  //OutletTestService(){}
  db:AngularFireDatabase;
  constructor() { }

  outletSave(upload) {
    console.log("Complete 100");

    this.db.database.ref('/outlets').child(upload.UUID).set(upload);
  }

}
