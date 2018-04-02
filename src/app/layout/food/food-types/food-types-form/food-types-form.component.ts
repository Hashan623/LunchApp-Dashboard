import { FoodtypeService } from '../foodtype.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { BrowserModule } from '@angular/platform-browser';
import { UUID } from 'angular2-uuid';
import { routerTransition } from '../../../../router.animations';


import { FoodType } from '../../../../models/foodtype';
import { fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { delay } from 'rxjs/operators';
import * as firebase from 'firebase';


@Component({
  selector: 'food-types-form',
  templateUrl: './food-types-form.component.html',
  styleUrls: ['./food-types-form.component.scss'],
  animations: [routerTransition()]
})
export class FoodTypesFormComponent implements OnInit {
  foodtype = {};
  id;
  selectedFiles: FileList;

  uuid: string = UUID.UUID();
  private basePath:string = '/uploads';
  //  address={};


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private foodtypeService: FoodtypeService) {

    // this.id = this.route.snapshot.paramMap.get('id');
    // this.ngOnInit
    // if (this.id) this.foodtypeService.get(this.id).take(1).subscribe(o => this.foodtype = o);


    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit;
    if (this.id)
    {
      this.foodtypeService.get(this.id).take(1).subscribe(o => this.foodtype = o);
    }
   }


//   save(outlet, address, uuid) {
//     if (this.id) this.foodtypeService.update(this.id, outlet);
//     else this.foodtypeService.create(this.foodtype, this.uuid);

//     this.router.navigate(['/food-types-view']);
//   }

  save(foodtype,img) {
    if (this.id)
    {
       foodtype.UUID = this.uuid;
       foodtype.imageUrl = img.src;
      this.foodtypeService.update(this.id, foodtype);
    }
    else
    {
      foodtype.UUID = this.uuid;
      foodtype.imageUrl = img.src;
      this.foodtypeService.create(foodtype);
    }

    this.router.navigate(['/food-types-view']);
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
