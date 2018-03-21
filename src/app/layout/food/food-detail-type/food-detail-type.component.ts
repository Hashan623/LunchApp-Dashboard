import { UUID } from 'angular2-uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodDetailTypeService } from './food-detail-type.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-food-detail-type',
  templateUrl: './food-detail-type.component.html',
  styleUrls: ['./food-detail-type.component.scss'],
  animations: [routerTransition()]
})
export class FoodDetailTypeComponent implements OnInit {
  foodDetailType = {}
  id;
  uuid: string = UUID.UUID();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private foodDetailTypeService: FoodDetailTypeService, ) {

    this.id = this.route.snapshot.paramMap.get('id');

    this.ngOnInit

    if (this.id) this.foodDetailTypeService.get(this.id).take(1).subscribe(o => this.foodDetailType = o);
  }

  save(outlet,address, uuid) {
    if (this.id) this.foodDetailTypeService.update(this.id, outlet);
    else this.foodDetailTypeService.create(this.foodDetailType, this.uuid);
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }

}
