import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { SharedModuleModule} from '../../shared/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
  ],
  exports: [SharedModuleModule],
  declarations: [SetupComponent]
})
export class SetupModule { }
