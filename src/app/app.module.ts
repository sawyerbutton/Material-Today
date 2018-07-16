import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { SetupModule} from './pages/setup/setup.module';
import { AppComponent } from './app.component';
import { MainModule} from './pages/main/main.module';
import {ListService} from './services/list/list.service';
import {TodoService} from './services/todo/todo.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SetupModule,
    MainModule
  ],
  providers: [ListService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
