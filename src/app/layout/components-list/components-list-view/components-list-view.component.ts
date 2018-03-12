import { ComponentService } from './../component.service';
import { ComponentList } from './../../../models/component-list';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';



@Component({
  selector: 'app-component-view',
  templateUrl: './components-list-view.component.html',
  styleUrls: ['./components-list-view.component.css']
})
export class ComponentsViewComponent implements OnInit , OnDestroy{

  @Input() component: ComponentList;




  components: ComponentList[];


        subscription: Subscription;
        tableResource: DataTableResource<ComponentList>;
        items: ComponentList[] = [];
        itemCount: number;

        constructor(private componentService: ComponentService) {
          this.subscription = this.componentService.getAll()
          .subscribe(components => {
            this.components = components;
            this.initializeTable(components);
          });
         }

         private initializeTable(components: ComponentList[]) {
          this.tableResource = new DataTableResource(components);
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
          let filteredcomponents = (query) ?
            this.components.filter(o => o.componentName.toString().includes(query.toLowerCase())) :
            this.components;

            this.initializeTable(filteredcomponents);
        }

        ngOnDestroy() {
          this.subscription.unsubscribe();
        }

        ngOnInit() {
        }

      }

