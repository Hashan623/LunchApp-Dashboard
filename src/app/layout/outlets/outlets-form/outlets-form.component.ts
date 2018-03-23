import { ActivatedRoute, Router } from '@angular/router';
import { OutletService } from '../outlets.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { Outlet } from '../../../models/outlet';
import { Address } from '../../../models/address';
import { BrowserModule } from '@angular/platform-browser';
import { MouseEvent } from '@agm/core';

import { UUID } from 'angular2-uuid';
import { routerTransition } from '../../../router.animations';
import { fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { delay } from 'rxjs/operators';
<<<<<<< HEAD
=======
import * as firebase from 'firebase';
>>>>>>> 8b00be9506278441d1d4b7c00ce6a5f801e7439d

@Component({
  selector: 'outlets-form',
  templateUrl: './outlets-form.component.html',
  styleUrls: ['./outlets-form.component.scss'],
  animations: [routerTransition()]
})
export class OutletsFormComponent implements OnInit {

  outlet = {};
  id;
  selectedFiles: FileList;
//  address={};

address: Address = new Address();

uuid: string = UUID.UUID();
private basePath:string = '/uploads';
//public uploadTask: firebase.storage.UploadTask;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private outletService: OutletService) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit;
<<<<<<< HEAD
    if (this.id)
=======
    if (this.id) 
>>>>>>> 8b00be9506278441d1d4b7c00ce6a5f801e7439d
    {
      this.outletService.get(this.id).take(1).subscribe(o => this.outlet = o);
    }
   }

<<<<<<< HEAD
  save(outlet,address, uuid) {
    if (this.id)
    {
      this.outletService.update(this.id, outlet);
    }
    else
    {
      outlet.file = this.selectedFiles.item(0);
      outlet.UUID = this.uuid;




    }
    this.address = new Address();
=======
  save(outlet,img) {
    if (this.id) 
    {  
      this.outletService.update(this.id, outlet);
    }
    else 
    {
      outlet.UUID = this.uuid;
      outlet.imageUrl = img.src;

      this.outletService.create(outlet);     
    }
>>>>>>> 8b00be9506278441d1d4b7c00ce6a5f801e7439d

    this.router.navigate(['/outlets-view']);
  }

<<<<<<< HEAD
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  ngOnInit() {
  }



/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
                              //GOOGLE MAP//




  // title: string = 'Google Maps Addeed Successfully';

  //    lat: number = 6.927079 ;

  //    lng: number = 79.861244;





  // google maps zoom level
  zoom: number = 12;

  lat: number =  6.927079;
  lng: number = 79.861244;

  draggable : boolean = true;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked(m: marker, $event: MouseEvent) {
    this.markers.length = 0;
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
    console.log('place', m, $event);

  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    this.markers.length = 0;
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    });
    console.log('dragEnd', m, $event);
  }



  markers: marker[] = [
	  // {
		//   lat: 6.886867772472544,
		//   lng: 79.88675504922867,
		//   label: 'Sen Su',
		//   draggable: true
	  // }

  ]
=======
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
>>>>>>> 8b00be9506278441d1d4b7c00ce6a5f801e7439d
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
