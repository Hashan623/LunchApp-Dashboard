import { AngularFireDatabase } from 'angularfire2/database';
import { OutletService } from './../../../outlets/outlets.service';
import { FoodtypeService } from './../../food-types/foodtype.service';
import { FooddetailService } from '../fooddetail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { BrowserModule } from '@angular/platform-browser';
import { UUID } from 'angular2-uuid';
import { routerTransition } from '../../../../router.animations';


import { FoodDetail } from '../../../../models/fooddetail';
import { fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { delay } from 'rxjs/operators';
import * as firebase from 'firebase';


@Component({
  selector: 'food-detail-form',
  templateUrl: './food-detail-form.component.html',
  styleUrls: ['./food-detail-form.component.scss'],
  animations: [routerTransition()]
})
export class FoodDetailFormComponent implements OnInit {
  fooddetail = {};
  id;
  outlets$;
  foodtypes$;
  foodDetailTypes$;

  selectedFiles: FileList;
  uuid: string = UUID.UUID();
  private basePath:string = '/uploads';

  ID: string;
  outletkey$;

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private route: ActivatedRoute,
    private foodtypeService: FoodtypeService,
    private fooddetailService: FooddetailService,
    outletService: OutletService,
    foodTypeService: FoodtypeService) {
    this.outlets$ = outletService.getOutletList();
    this.foodtypes$ = foodTypeService.getFoodtypesList();
    this.foodDetailTypes$ = this.getFoodDetailTypesList();

    // this.id = this.route.snapshot.paramMap.get('id');
    // this.ngOnInit
    // if (this.id) this.fooddetailService.get(this.id).take(1).subscribe(o => this.fooddetail = o);

    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit;
    if (this.id)
    {
      this.fooddetailService.get(this.id).take(1).subscribe(o => this.fooddetail = o);
    }

   }

//   save(outlet,address, uuid) {
//     if (this.id) this.fooddetailService.update(this.id, outlet);
//     else this.fooddetailService.create(this.fooddetail, this.uuid);

//     this.router.navigate(['/food-detail-view']);
//   }

  save(fooddetail,img) {
    if (this.id)
    {
      fooddetail.UUID = this.uuid;
      fooddetail.imageUrl = img.src;
      this.fooddetailService.update(this.id, fooddetail);
    }
    else
    {
        fooddetail.UUID = this.uuid;
        fooddetail.imageUrl = img.src;

      this.fooddetailService.create(fooddetail);
    }

    this.router.navigate(['/food-detail-view']);
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



  getFoodDetailTypesList() {
    return this.db.list('/foodDetailType', {
      query: {
        orderByChild: 'sort'
      }
    });
  }

  ngOnInit() {
  }

}
