import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Rider } from '../../../models/rider';
import { Subscription } from 'rxjs/Rx';
import { RiderService } from '../../../shared/services/rider.service';
import { DataTableResource } from 'angular-4-data-table';

import { Address } from '../../../models/address';

@Component({
  selector: 'app-rider-view',
  templateUrl: './rider-view.component.html',
  styleUrls: ['./rider-view.component.scss'],
  animations: [routerTransition()]
})
export class RiderViewComponent implements OnInit, OnDestroy {

  riders: Rider[];
  address: Address[];

  subscription: Subscription;
  tableResource: DataTableResource<Rider>;
  items: Rider[] = [];
  itemCount: number;

  constructor(private riderService: RiderService) {
    this.subscription = this.riderService.getAll()
    .subscribe(riders => {
      this.riders = riders;
      this.initializeTable(riders);
    });
   }

   private initializeTable(riders: Rider[]) {
    this.tableResource = new DataTableResource(riders);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count);
   }

   reloadItems(params) {
    if (!this.tableResource) return;

    this.tableResource.query(params)
      .then(items => this.items = items);
   }

  filter(query: String) {
    let filteredOutlets = (query) ?
      this.riders.filter(o => o.name.toLowerCase().includes(query.toLowerCase())) :
      this.riders;

      this.initializeTable(filteredOutlets);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

  // updateActive(isActive: boolean) {
  //   this.riderService.updateRider(this.rider.riderId, {active: isActive})
  // }


}
