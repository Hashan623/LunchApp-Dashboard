//import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { UUID } from 'angular2-uuid';
import { FoodtypeTestService } from './foodtype-test.service';

@Injectable()
export class FoodtypeService {

  ID: string

  constructor(private db: AngularFireDatabase, private foodtypeSave: FoodtypeTestService) { }

  uuid;

  private basePath:string = '/uploads';
//  uploads: FirebaseListObservable<Address[]>;

  // getFoodtypesList() {
  //   return this.db.list('/foodtypes', {
  //     query: {
  //       orderByChild: 'name'
  //     }
  //   });
  // }

  getFoodtypesList() {
    return this.db.list('/foodtypes', {
      query: {
        orderByChild: 'isMainMenu',
        equalTo: true //Himanshu
      }
    });
  }

//   create(foodtype, uuid) {
//     this.uuid = uuid;
//     foodtype.UUID = uuid;
//     this.db.database.ref('/foodtypes').child(this.uuid).set(foodtype)
//     // this.db.list('/address').push(address);
//   }

  create(upload) {
    console.log("Complete 100");
    //this.uuid = upload.UUID;
    //outlet.UUID = uuid;
    this.db.database.ref('/foodtypes').child(upload.UUID).set(upload);

    //  const addresses = this.db.list('/address');
    //  addresses.push(address);
  }


  update(foodtypeId, foodtype) {
    return this.db.object('/foodtypes/' + foodtypeId).update(foodtype);
  }

  getAll() {
    return this.db.list('/foodtypes');
  }

  get(foodtypeId) {
    return this.db.object('/foodtypes/' + foodtypeId)
  }
}
