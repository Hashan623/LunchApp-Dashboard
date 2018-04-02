import { Address } from './../../models/address';
import { Rider } from './../../models/rider';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

import { RiderTestService } from './rider-test.service';

@Injectable()
export class RiderService {
  uuid;
  ID: string

  private addressPath: string = '/address';


  address: FirebaseObjectObservable<Address> = null;
  addresses: FirebaseListObservable<Address[]> = null;


  private basePath:string = '/uploads';
  uploads: FirebaseListObservable<Address[]>;


  constructor( private db: AngularFireDatabase, private riderSave: RiderTestService) { }


  getAddress(key: string): FirebaseObjectObservable<Address> {
    this.address = this.db.object(`${this.addressPath}/${key}`);
    return this.address;
  }


  create(upload) {

    console.log("Complete 100");

    //this.uuid = uuid;
   // rider.UUID = uuid;
    this.db.database.ref('/riders').child(upload.UUID).set(upload);


  //  this.db.list('/riders').push(rider);

  //  const addresses = this.db.list('/address');
  //  addresses.push(address);
  }

  update(riderId, rider) {
    return this.db.object('/riders/' + riderId).update(rider);
  }

  getAll() {
    return this.db.list('/riders');
  }

  get(riderId) {
    return this.db.object('/riders/' + riderId)
  }
}
