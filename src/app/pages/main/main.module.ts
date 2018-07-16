import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {SharedModuleModule} from '../../shared/shared-module/shared-module.module';
import { LeftControlComponent } from './left-control/left-control.component';
import { ListComponent } from './left-control/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModuleModule
  ],
  declarations: [MainComponent, LeftControlComponent, ListComponent],
  exports: [MainComponent]
})
export class MainModule { }
