import { Address } from './../../models/address';
import { Rider } from './../../models/rider';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';


@Injectable()
export class RiderService {
  uuid;

  private addressPath: string = '/address';


  address: FirebaseObjectObservable<Address> = null;
  addresses: FirebaseListObservable<Address[]> = null;


  constructor( private db: AngularFireDatabase) { }


  getAddress(key: string): FirebaseObjectObservable<Address> {
    this.address = this.db.object(`${this.addressPath}/${key}`);
    return this.address;
  }


  create(rider, address: Address, uuid) {
  //  rider.googleid = 'null';
  //  rider.active = 'false';


    this.uuid = uuid;
    rider.UUID = uuid;
    this.db.database.ref('/riders').child(this.uuid).set(rider)
  //  this.db.list('/riders').push(rider);

    const addresses = this.db.list('/address');
    addresses.push(address);
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





//   basePath = 'riders';
//   uploadsRef: AngularFireList<Rider>;
//   riders: Observable<Rider[]>;

  private uploadTask: firebase.storage.UploadTask;

    private basePath:string = '/riders';
    riders: FirebaseListObservable<Rider[]>;

  pushUpload(rider: Rider) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${rider.file.name}`).put(rider.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
     //   rider.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
     const snap = snapshot;
     rider.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100 // CHANGEMENT IS HERE
      },
      (error) => {
        // upload failed
        console.log(error)
      },
    //   () => {

    //     // upload success

    //     if (uploadTask.snapshot.downloadURL) {
    //         rider.url = uploadTask.snapshot.downloadURL;
    //         rider.name = rider.file.name;
    //       this.saveFileData(rider);
    //       return;
    //     } else {
    //       console.error('No download URL!');
    //     }
    //   },
    );
  }


  // Writes the file details to the realtime db
  private saveFileData(rider: Rider) {
    this.db.list(`${this.basePath}/`).push(rider);
  }




}
