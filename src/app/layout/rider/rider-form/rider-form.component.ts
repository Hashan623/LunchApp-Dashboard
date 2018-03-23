import { Component, OnInit } from '@angular/core';
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



@Component({
  selector: 'app-rider-form',
  templateUrl: './rider-form.component.html',
  styleUrls: ['./rider-form.component.scss'],
  animations: [routerTransition()]
})

export class RiderFormComponent implements OnInit {
  rider = {};
  id;

  address: Address = new Address();
  uuid: string = UUID.UUID();



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private riderService: RiderService) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit
    if (this.id) this.riderService.get(this.id).take(1).subscribe(o => this.rider = o);
   }

  save(rider, address, uuid) {
    if (this.id) this.riderService.update(this.id, rider);
    else this.riderService.create(this.rider,this.address, this.uuid);

    this.address = new Address();

    this.router.navigate(['/rider-view']);
  }

  ngOnInit() {
  }
}
