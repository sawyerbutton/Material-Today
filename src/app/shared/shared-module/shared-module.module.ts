import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule} from '@angular/material';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatBadgeModule} from '@angular/material/badge';
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
    MatToolbarModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatBadgeModule
  ]
})
export class SharedModuleModule { }
