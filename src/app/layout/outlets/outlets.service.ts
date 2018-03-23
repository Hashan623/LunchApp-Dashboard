import { Address } from './../../models/address';
//import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

import { UUID } from 'angular2-uuid';
import { OutletTestService } from './outlet-test.service';

@Injectable()
export class OutletService {
  ID: string

  private addressPath: string = '/address';

  uuid;
  address: FirebaseObjectObservable<Address> = null;
  addresses: FirebaseListObservable<Address[]> = null;

  private basePath:string = '/uploads';
  uploads: FirebaseListObservable<Address[]>;
  
  constructor(private db: AngularFireDatabase, private outletSave: OutletTestService) { 
    //this.outletSave2 = outletSave;

  }
  
  getOutletList() {
    return this.db.list('/outlets', {
      query: {
        orderByChild: 'name'
      }
    });
  }

  PushUpload(upload) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(this.basePath).child(upload.file.name).put(upload.file);
    //let outletSave2:OutletTestService;

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,{
      next :function (snapshot){
        // upload in progress
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
        //console.log("Progress : "+upload.progress);
      },
      error: function (error) {
        // upload failed
        console.log(error)
      },
      complete: function () {
        try {
        console.log("Complete : "+ uploadTask.snapshot.downloadURL);
        upload.URL = uploadTask.snapshot.downloadURL;
        //return uploadTask.snapshot.downloadURL;

        var promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            this.create(upload);
            console.log("Async Work Complete 02");
            //console.log("TEST 0022 : "+source);
            resolve();
          }, 1000);
        });

        //let outletSave2 = new OutletTestService();
        //outletSave2.outletSave(upload);
        } catch (error) {
          console.log(error);
        }
        //new OutletTestService().outletSave(upload);
        //new create()
        //this.create(upload);
        //return this.upload;
      }
      
    });
    //return "aaaa";
  }

  

  getAddress(key: string): FirebaseObjectObservable<Address> {
    
    this.address = this.db.object(`${this.addressPath}/${key}`);
    return this.address;
  }

  create(upload) {
    console.log("Complete 100");
    //this.uuid = upload.UUID;
    //outlet.UUID = uuid;
    this.db.database.ref('/outlets').child(upload.UUID).set(upload);

    //  const addresses = this.db.list('/address');
    //  addresses.push(address);
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
