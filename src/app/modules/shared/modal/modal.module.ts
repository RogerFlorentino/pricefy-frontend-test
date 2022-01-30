import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponentComponent } from './modal-component/modal-component.component';



@NgModule({
  declarations: [  
    ModalComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponentComponent
  ]
})
export class ModalModule { }
