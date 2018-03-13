import { ComponentService } from './../component.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { UUID } from 'angular2-uuid';


@Component({
  selector: 'app-component-form',
  templateUrl: './components-list-form.component.html',
  styleUrls: ['./components-list-form.component.css']
})
export class ComponentsListFormComponent implements OnInit {


  component = {};
  id;

  uuid: string = UUID.UUID();

  constructor(private router: Router,
    private route: ActivatedRoute,
    private componentService: ComponentService) {


      this.id = this.route.snapshot.paramMap.get('id');
      this.ngOnInit
      if (this.id) this.componentService.get(this.id).take(1).subscribe(o => this.component = o);
     }

     save(component, uuid) {
      if (this.id) this.componentService.update(this.id, component);
      else this.componentService.create(this.component, this.uuid);



      this.router.navigate(['/components-list-view']);
    }

  ngOnInit() {
  }

}
