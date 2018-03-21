import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AppUser } from '../../models/app-user';

@Injectable()
export class UserService {

  uuid: string = UUID.UUID();
  constructor(private db: AngularFireDatabase) { }

  get(uid: string): FirebaseObjectObservable<AppUser> {
    return this.db.object('/users/' + uid);
  }

  getNavHeaderList(value:string) {
    //console.log('UserLevel 2 : '+ value);
    return this.db.list('/userPermissionGroup', {
      query: {
        orderByChild: 'userLevelID',
        equalTo : value
      }
    });
  }

  getComponentGroupHeaderList(value:string) {
    //console.log('UserLevel 2 : '+ value);
    return this.db.list('/componentsGroup', {
      query: {
        orderByChild: 'UUID',
        equalTo : value
      }
    });
  }

  getNavDetailsList(value:string) {
    //console.log('UserLevel details : '+ value);
    return this.db.list('/componentsGroup', {
      query: {
        orderByChild: 'UUID',
        equalTo : value
      }
    });
  }

  getComponentHeaderList(value:string) {
    //console.log('UserLevel 2 : '+ value);
    return this.db.list('/components', {
      query: {
        orderByChild: 'UUID',
        equalTo : value
      }
    });
  }


}
