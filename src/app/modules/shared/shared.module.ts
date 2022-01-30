import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from './modal/modal.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [
    CommonModule,
    ModalModule 
  ]
})
export class SharedModule { }
