import { ComponentModel } from './../../models/component-model';
import { ComponentGroup } from './../../models/components-group';
import { ComponentList } from './../../models/component-list';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormGroup, FormControl } from '@angular/forms';
import { ComponentGroupService } from './components-group.service';
import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { forEach } from '@angular/router/src/utils/collection';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-component-group',
  templateUrl: './components-group.component.html',
  styleUrls: ['./components-group.component.css'],
  animations: [routerTransition()]
})
export class ComponentsGroupComponent implements OnInit {
  //group = {};
  ComponentGroup = {};
  components$;
  selectedItems = [];
  dropdownSettings = {};
  observables = [];

  uuid: string = UUID.UUID();

  constructor(private componentGroupService: ComponentGroupService, private db: AngularFireDatabase) {
    this.components$ = componentGroupService.getComponentNamesList();

    this.components$.subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        let com = new ComponentModel;

        com.isActive = snapshot.isActive;
        com.itemName = snapshot.componentName;
        com.url = snapshot.url;
        com.id = snapshot.UUID;
        this.observables.push(com);
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

  save(ComponentGroup, uuid) {

    let componentModelGroup = [];

    ComponentGroup.component.forEach(function(current_value) {

      let componentModel = new ComponentList;
      componentModel.componentName = current_value.itemName;
      componentModel.uuid = current_value.id;
      componentModel.url = current_value.url;
      componentModel.isActive = current_value.isActive;

      componentModelGroup.push(componentModel);
    });

    ComponentGroup.UUID = this.uuid;
    ComponentGroup.component = componentModelGroup;
    this.db.database.ref('/componentsGroup').child(this.uuid).set(ComponentGroup)
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
