import { UserLevelService } from './../user-levels.service';
import { UserLevel } from './../../../models/user-level';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';



@Component({
  selector: 'app-userlevels-view',
  templateUrl: './user-levels-view.component.html',
  styleUrls: ['./user-levels-view.component.css']
})
export class UserLevelsViewComponent implements  OnInit, OnDestroy {

  @Input() userlevels: UserLevel;




  userlevelss: UserLevel[];


      subscription: Subscription;
      tableResource: DataTableResource<UserLevel>;
      items: UserLevel[] = [];
      itemCount: number;

      constructor(private userlevelsService: UserLevelService) {
        this.subscription = this.userlevelsService.getAll()
        .subscribe(userlevelss => {
          this.userlevelss = userlevelss;
          this.initializeTable(userlevelss);
        });
       }

       private initializeTable(userlevelss: UserLevel[]) {
        this.tableResource = new DataTableResource(userlevelss);
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
        let filteredOrders = (query) ?
          this.userlevelss.filter(o => o.userlevelname.toString().includes(query.toLowerCase())) :
          this.userlevelss;

          this.initializeTable(filteredOrders);
      }

      ngOnDestroy() {
        this.subscription.unsubscribe();
      }

      ngOnInit() {
      }

    }
