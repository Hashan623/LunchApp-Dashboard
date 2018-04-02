import { Component,OnDestroy ,OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RiderService } from '../rider.service';
import 'rxjs/add/operator/take';

import {Address} from '../../../models/address';
import { UUID } from 'angular2-uuid';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {Rider} from '../../../models/rider';


import { fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { delay } from 'rxjs/operators';
import * as firebase from 'firebase';

@Component({
  selector: 'app-rider-form',
  templateUrl: './rider-form.component.html',
  styleUrls: ['./rider-form.component.scss'],
  animations: [routerTransition()]
})

export class RiderFormComponent implements OnInit {
  rider = {};
  id;
  selectedFiles: FileList;

  address: Address = new Address();
  uuid: string = UUID.UUID();

  private basePath:string = '/uploads';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private riderService: RiderService) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit
    if (this.id)
    {
      this.riderService.get(this.id).take(1).subscribe(o => this.rider = o);
    }
   }

//   save(rider, address, uuid) {
//     if (this.id) this.riderService.update(this.id, rider);
//     else this.riderService.create(this.rider,this.address, this.uuid);

//     this.address = new Address();

//     this.router.navigate(['/rider-view']);
//   }


  save(rider,img) {
    if (this.id)
    {
        rider.UUID = this.uuid;
        rider.imageUrl = img.src;
      this.riderService.update(this.id, rider);
    }
    else
    {
        rider.UUID = this.uuid;
        rider.imageUrl = img.src;

      this.riderService.create(rider);
    }

    this.router.navigate(['/rider-view']);
  }



  PushUpload(upload,img) {

        let storageReference = firebase.storage().ref('/images/' + upload.files[0].name);
        let uploadTask = storageReference.put(upload.files[0]);
        uploadTask.on('state_changed', function (snapshot) {
          console.log('Upload is % done');
          upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
          console.log('Upload is ' + upload.progress + '% done');

          switch (uploadTask.snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        }, function (error) {
          // Handle unsuccessful uploads
        }, function () {

          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          storageReference.getDownloadURL().then(function (url) {
            // Insert url into an <img> tag to "download"
            img.src = url;
            console.log('Upload is ' + url );
          });
          return this.uploadTask;
        });
      }


      detectFiles(event) {
        this.selectedFiles = event.target.files;
      }



  ngOnInit() {
  }
}
