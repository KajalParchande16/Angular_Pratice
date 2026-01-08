import { inject, Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
export type ModalSize = 'sm' | 'lg' | 'xl';
export type ModalPosition =
  | 'center'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  modal = inject(NgbModal);

  constructor() { }

  makeDeepCopy(data: any) {
    return JSON.parse(JSON.stringify(data))
  }

  open(
    component: any,
    size: ModalSize = 'lg',
    position: ModalPosition = 'center',
    options?: NgbModalOptions
  ) {
    const modalOptions: NgbModalOptions = {
      size,
      backdrop: 'static',
      keyboard: false,
      centered: position === 'center',
      windowClass: this.getPositionClass(position),
      ...options
    };

    return this.modal.open(component, modalOptions);
  }

   private getPositionClass(position: ModalPosition): string {
    switch (position) {
      case 'top':
        return 'modal-top';
      case 'bottom':
        return 'modal-bottom';
      case 'left':
        return 'modal-left';
      case 'right':
        return 'modal-right';
      default:
        return '';
    }
  }

    closeAll() {
    this.modal.dismissAll();
  }
  // openSmallModal(modalName: any) {
  //   return this.modal.open(modalName, {
  //     size: 'lg',
  //     backdrop: 'static',
  //     keyboard: false,
  //     windowClass: 'modal-sm'
  //   })
  // }
}
