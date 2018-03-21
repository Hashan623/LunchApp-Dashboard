import { UserLevelService } from './../../user-levels/user-levels.service';
import { UsersCrudService } from './../users-crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { UUID } from 'angular2-uuid';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-user-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
  animations: [routerTransition()]
})
export class UsersFormComponent implements OnInit {

  user = {};
  id;
  ID: string;
  userlevelss$;

  uuid: string = UUID.UUID();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    userlevelsService: UserLevelService,
    private usercrudService: UsersCrudService) {

      this.userlevelss$ = userlevelsService.getuserlevelsList();
    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit
    if (this.id) this.usercrudService.get(this.id).take(1).subscribe(u => this.user = u);
   }

  save(user, uuid) {
    if (this.id) this.usercrudService.update(this.id, user);
    else this.usercrudService.create(this.user, this.uuid);



    this.router.navigate(['/users-view']);
  }

  ngOnInit() {
  }

}
