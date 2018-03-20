import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { UUID } from 'angular2-uuid';

@Injectable()
export class FoodDetailTypeService {

  uuid;

  constructor(private db: AngularFireDatabase) { }

  create(fooddetailtype, uuid) {
    this.uuid = uuid;
    fooddetailtype.UUID = uuid;
    this.db.database.ref('/foodDetailType').child(this.uuid).set(fooddetailtype)
  }

  update(fooddetailId, fooddetailtype) {
    return this.db.object('/foodDetailType/' + fooddetailId).update(fooddetailtype);
  }

  getAll() {
    return this.db.list('/foodDetailType');
  }

  get(fooddetailId) {
    return this.db.object('/foodDetailType/' + fooddetailId)
  }
}
