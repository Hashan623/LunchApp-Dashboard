import { Address } from './../../models/address';
//import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

import { UUID } from 'angular2-uuid';

@Injectable()
export class OutletService {
  ID: string

  private addressPath: string = '/address';

  uuid;
  address: FirebaseObjectObservable<Address> = null;
  addresses: FirebaseListObservable<Address[]> = null;

  constructor(private db: AngularFireDatabase) { }

  getOutletList() {
    return this.db.list('/outlets', {
      query: {
        orderByChild: 'name'
      }
    });
  }



  getAddress(key: string): FirebaseObjectObservable<Address> {
    this.address = this.db.object(`${this.addressPath}/${key}`);
    return this.address;
  }

  create(outlet, address: Address, uuid) {

    this.uuid = uuid;
    outlet.UUID = uuid;
    this.db.database.ref('/outlets').child(this.uuid).set(outlet);
   //this.db.list('/outlets').push(outlet);




  // this.db.list('/address').push(address);

     const addresses = this.db.list('/address');
     addresses.push(address);
  }

  update(outletId, outlet) {
    return this.db.object('/outlets/' + outletId).update(outlet);
  }

  getAll() {
    return this.db.list('/outlets');
  }

  get(outletId) {
    return this.db.object('/outlets/' + outletId)
  }
}
