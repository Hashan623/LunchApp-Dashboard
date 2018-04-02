import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { UUID } from 'angular2-uuid';

import * as firebase from 'firebase';
import { FooddetailTestService } from './fooddetail-test.service';

@Injectable()
export class FooddetailService {

  //ID: string = UUID.UUID();


  constructor(private db: AngularFireDatabase, private fooddetailSave: FooddetailTestService) { }

  uuid;
  private basePath:string = '/uploads';
  // getFoodtypesList() {
  //   return this.db.list('/foodtypes', {
  //     query: {
  //       orderByChild: 'isMainMenu',
  //       equalTo: false
  //     }
  //   });
  // }

//   create(fooddetail, uuid) {
//     this.uuid = uuid;
//     fooddetail.UUID = uuid;
//     this.db.database.ref('/fooddetails').child(this.uuid).set(fooddetail)
//   }

  create(upload) {
    console.log("Complete 100");
    //this.uuid = upload.UUID;
    //outlet.UUID = uuid;
    this.db.database.ref('/fooddetails').child(upload.UUID).set(upload);

    //  const addresses = this.db.list('/address');
    //  addresses.push(address);
  }

  update(fooddetailId, fooddetail) {
    return this.db.object('/fooddetails/' + fooddetailId).update(fooddetail);
  }

  getAll() {
    return this.db.list('/fooddetails');
  }

  get(fooddetailId) {
    return this.db.object('/fooddetails/' + fooddetailId)
  }
}
