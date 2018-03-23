import { ActivatedRoute, Router } from '@angular/router';
import { OutletService } from '../outlets.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { Outlet } from '../../../models/outlet';
import { Address } from '../../../models/address';
//import { AgmCoreModule } from 'angular2-google-maps/core';
import { BrowserModule } from '@angular/platform-browser';
import { MouseEvent } from '@agm/core';

import { UUID } from 'angular2-uuid';
import { routerTransition } from '../../../router.animations';
import { fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { delay } from 'rxjs/operators';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private outletService: OutletService) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit;
    if (this.id) 
    {
      this.outletService.get(this.id).take(1).subscribe(o => this.outlet = o);
    }
   }

  save(outlet,address, uuid) {
    if (this.id) 
    {  
      this.outletService.update(this.id, outlet);
    }
    else 
    {
      outlet.file = this.selectedFiles.item(0);
      outlet.UUID = this.uuid;

      let source;

      var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          source = this.outletService.PushUpload(outlet);
          console.log("Async Work Complete");
          console.log("TEST 0022 : "+source);
          resolve();
        }, 1000);
      });

      // setTimeout(()=>{
      //   source = this.outletService.PushUpload(outlet);
      // },200000);

      // let source = this.outletService.PushUpload((outlet)=>{
      //   delay(10);
      // });
      // it('should be able to work with Observable.delay', fakeAsync(() => {
      //   let actuallyDone=false;
      //   source= this.outletService.PushUpload(outlet);
        
      //   tick(100);
      //   expect(actuallyDone).toBeTruthy(); // Expected false to be truthy.
    
      //   discardPeriodicTasks();
      // }));


      
      //source.delay(10);
      //waits(2000)
      

    }
    this.address = new Address();

    this.router.navigate(['/outlets-view']);
  }

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





//   // google maps zoom level
//   zoom: number = 12;

//   lat: number =  6.927079;
//   lng: number = 79.861244;

//   draggable : boolean = true;

//   clickedMarker(label: string, index: number) {
//     console.log(`clicked the marker: ${label || index}`)
//   }

//   mapClicked(m: marker, $event: MouseEvent) {
//     this.markers.length = 0;
//     this.markers.push({
//       lat: $event.coords.lat,
//       lng: $event.coords.lng,
//       draggable: true
//     });
//     console.log('place', m, $event);

//   }

//   markerDragEnd(m: marker, $event: MouseEvent) {
//     this.markers.length = 0;
//     this.markers.push({
//       lat: $event.coords.lat,
//       lng: $event.coords.lng,
//       draggable: false
//     });
//     console.log('dragEnd', m, $event);
//   }



//   markers: marker[] = [
// 	  // {
// 		//   lat: 6.886867772472544,
// 		//   lng: 79.88675504922867,
// 		//   label: 'Sen Su',
// 		//   draggable: true
// 	  // }

//   ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
