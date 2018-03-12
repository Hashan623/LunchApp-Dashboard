import { UserPersmission } from './../../models/user-permission';
import { ComponentGroup } from './../../models/components-group';
import { UUID } from 'angular2-uuid';
import { ComponentGroupMultiSelect } from './../../models/component-group-multiSelect';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-level-permission',
  templateUrl: './user-level-permission.component.html',
  styleUrls: ['./user-level-permission.component.css']
})
export class UserLevelPermissionComponent implements OnInit {

  userLevels$
  userGroups$
  userPersmission = {}
  observables = [];
  uuid: string = UUID.UUID();

  constructor(private db: AngularFireDatabase) {
    this.userLevels$ = this.getUserLevelList();
    this.userGroups$ = this.getComponentNamesList();

    this.userGroups$.subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        let com = new ComponentGroupMultiSelect;

        com.itemName = snapshot.componentGroupName;
        com.id = snapshot.UUID;
        this.observables.push(com);
      });
    });
    //console.log(this.observables);
  }

  save(UserPersmission, uuid) {

    let componentModelGroup = [];

    UserPersmission.userGroup.forEach(function(current_value) {
      
      let componentModel = new ComponentGroup;
      componentModel.componentGroupName = current_value.itemName;
      componentModel.UUID = current_value.id;

      componentModelGroup.push(componentModel);
    });

    UserPersmission.UUID = this.uuid;
    UserPersmission.userLevelID = UserPersmission.userLevel.UUID;
    UserPersmission.userLevel = UserPersmission.userLevel.userlevelname;
    UserPersmission.userGroup = componentModelGroup;
    this.db.database.ref('/userPermissionGroup').child(this.uuid).set(UserPersmission)
  }


  getUserLevelList() {
    return this.db.list('/userlevelss', {
      query: {
        orderByChild: 'userlevelname'
      }
    });
  }

  getComponentNamesList() {
    return this.db.list('/componentsGroup', {
      query: {
        orderByChild: 'componentGroupName',
      }
    });
  }

  ngOnInit() {
  }

}
