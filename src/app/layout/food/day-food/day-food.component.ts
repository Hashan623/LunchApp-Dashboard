import { FoodDetail } from './../../../models/fooddetail';
import { DayFoodMultiSelect } from './../../../models/day-food-multiselect';
import { DayFood } from './../../../models/day-food';
import { UUID } from 'angular2-uuid';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-day-food',
  templateUrl: './day-food.component.html',
  styleUrls: ['./day-food.component.scss'],
  animations: [routerTransition()]
})
export class DayFoodComponent implements OnInit {
  dayfood = {}
  foods$;
  outlets$;
  foodtypes$;
  observables = [];
  selectedItems = [];
  dropdownSettings = {};

  uuid: string = UUID.UUID();

  constructor(private db: AngularFireDatabase) {
    this.outlets$ = this.getOutletsList();
    this.foods$ = this.getFoodDetailList();
    this.foodtypes$ = this.getFoodtypesList();

    this.foods$.subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        let food = new DayFoodMultiSelect;

        food.itemName = snapshot.fname;
        food.id = snapshot.UUID;
        this.observables.push(food);
      });
    });
  }

  ngOnInit() {
    this.selectedItems = [];

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Components",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }

  save(DayFood, uuid) {

    let componentModelGroup = [];

    DayFood.food.forEach(function (current_value) {

      let dayfoodModel = new DayFood;
      dayfoodModel.fname = current_value.itemName;
      dayfoodModel.UUID = current_value.id;

      componentModelGroup.push(dayfoodModel);
    });

    DayFood.UUID = this.uuid;
    DayFood.outletName = DayFood.outletName;
    DayFood.foodType = DayFood.foodtype;
    DayFood.curryCount = DayFood.curryCount;
    DayFood.date = DayFood.date;
    DayFood.foodDetail = componentModelGroup;
    this.db.database.ref('/dayFood').child(this.uuid).set(DayFood)
  }

  // save(UserPersmission, uuid) {

  //   let componentModelGroup = [];

  //   UserPersmission.userGroup.forEach(function(current_value) {

  //     let componentModel = new ComponentGroup;
  //     componentModel.componentGroupName = current_value.itemName;
  //     componentModel.UUID = current_value.id;

  //     componentModelGroup.push(componentModel);
  //   });

  //   UserPersmission.UUID = this.uuid;
  //   UserPersmission.userLevelID = UserPersmission.userLevel.UUID;
  //   UserPersmission.userLevel = UserPersmission.userLevel.userlevelname;
  //   UserPersmission.userGroup = componentModelGroup;
  //   this.db.database.ref('/userPermissionGroup').child(this.uuid).set(UserPersmission)
  // }

  getOutletsList() {
    return this.db.list('/outlets', {
      query: {
        orderByChild: 'name'
      }
    });
  }

  getFoodDetailList() {
    return this.db.list('/fooddetails', {
      query: {
        orderByChild: 'fname'
      }
    });
  }

  getFoodtypesList() {
    return this.db.list('/foodtypes', {
      query: {
        orderByChild: 'isMainMenu',
        equalTo: false
      }
    });
  }

  onItemSelect(item: any) {
  }

  OnItemDeSelect(item: any) {
  }

  onSelectAll(item: any) {
  }

  onDeSelectAll(item: any) {
  }

}
