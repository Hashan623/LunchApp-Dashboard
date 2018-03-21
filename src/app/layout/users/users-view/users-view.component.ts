import { UsersCrudService } from './../users-crud.service';


import { User } from './../../../models/user';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';
import { routerTransition } from '../../../router.animations';



@Component({
  selector: 'app-user-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css'],
  animations: [routerTransition()]
})
export class UsersViewComponent implements OnInit, OnDestroy  {


  @Input() user: User;

  users: User[];


      subscription: Subscription;
      tableResource: DataTableResource<User>;
      items: User[] = [];
      itemCount: number;

      constructor(private usercrudService: UsersCrudService) {
        this.subscription = this.usercrudService.getAll()
        .subscribe(users => {
          this.users = users;
          this.initializeTable(users);
        });
       }

       private initializeTable(users: User[]) {
        this.tableResource = new DataTableResource(users);
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
        let filteredUsers = (query) ?
          this.users.filter(o => o.uname.toString().includes(query.toLowerCase())) :
          this.users;

          this.initializeTable(filteredUsers);
      }

      ngOnDestroy() {
        this.subscription.unsubscribe();
      }

      ngOnInit() {
      }

    }
