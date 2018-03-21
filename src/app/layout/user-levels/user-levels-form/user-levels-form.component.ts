import { UserLevelService } from './../user-levels.service';


import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
//import { OutletService } from './../../../outlet.service';
import { UUID } from 'angular2-uuid';
import { routerTransition } from '../../../router.animations';


@Component({
  selector: 'app-userlevels-form',
  templateUrl: './user-levels-form.component.html',
  styleUrls: ['./user-levels-form.component.css'],
  animations: [routerTransition()]
})
export class UserLevelsFormComponent implements OnInit {

  userlevels = {};
  id;

  uuid: string = UUID.UUID();

  constructor(private router: Router,
    private route: ActivatedRoute,
    private userlevelsService: UserLevelService) {


      this.id = this.route.snapshot.paramMap.get('id');
      this.ngOnInit
      if (this.id) this.userlevelsService.get(this.id).take(1).subscribe(o => this.userlevels = o);
     }

     save(userlevels, uuid) {
      if (this.id) this.userlevelsService.update(this.id, userlevels);
      else this.userlevelsService.create(this.userlevels, this.uuid);



      this.router.navigate(['/user-levels-view']);
    }

  ngOnInit() {
  }

}
