import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../../services/local-storage.service';
import {START_USING_DATE, USERNAME} from '../../../services/local-storage.namespace';

@Component({
  selector: 'app-left-control',
  templateUrl: './left-control.component.html',
  styleUrls: ['./left-control.component.css']
})
export class LeftControlComponent implements OnInit {
  public userName: string;
  public userTime: string;
  constructor(
    private store: LocalStorageService
  ) { }

  ngOnInit() {
    this.userName = this.store.get(USERNAME);
    this.userTime = this.store.get(START_USING_DATE);
    this.userTime = this.userTime.substring(0, 10);
  }

}
