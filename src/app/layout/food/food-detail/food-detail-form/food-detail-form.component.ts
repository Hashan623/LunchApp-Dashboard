import { OutletService } from './../../../outlets/outlets.service';
import { FoodtypeService } from './../../food-types/foodtype.service';
import { FooddetailService } from '../fooddetail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { BrowserModule } from '@angular/platform-browser';
import { UUID } from 'angular2-uuid';
import { routerTransition } from '../../../../router.animations';


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

  ID: string;

  outletkey$;

  uuid: string = UUID.UUID();


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private foodtypeService: FoodtypeService,
    private fooddetailService: FooddetailService,
    outletService: OutletService,
    foodTypeService: FoodtypeService) {
    this.outlets$ = outletService.getOutletList();
    this.foodtypes$ = foodTypeService.getFoodtypesList();

    this.id = this.route.snapshot.paramMap.get('id');

    this.ngOnInit

    if (this.id) this.fooddetailService.get(this.id).take(1).subscribe(o => this.fooddetail = o);


   }

  save(outlet,address, uuid) {
    if (this.id) this.fooddetailService.update(this.id, outlet);
    else this.fooddetailService.create(this.fooddetail, this.uuid);

    this.router.navigate(['/food-detail-view']);
  }

  ngOnInit() {
  }

}
