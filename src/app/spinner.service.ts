import { Injectable, EventEmitter } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class SpinnerService {
  public spinnerActive: EventEmitter<Boolean>;
  constructor(
    private spinnerService: Ng4LoadingSpinnerService
  ) {
    this.spinnerActive = new EventEmitter();

  }

  activate() {
    this.spinnerService.show();
  }

  deactivate() {
    this.spinnerService.hide();
  }

}