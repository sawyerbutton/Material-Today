import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule} from '@angular/material';
import { MatMomentDateModule} from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMomentDateModule,
    FormsModule
  ]
})
export class SharedModuleModule { }
