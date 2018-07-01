import { Component, OnInit } from '@angular/core';
import { LocalStorageService} from '../../services/local-storage.service';
import { USERNAME, INIT_FLAG, START_USING_DATE} from '../../services/local-storage.namespace';
import * as moment from 'moment';
@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  public username: string;
  public title = 'Material style Login';
  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
  }
  public completeSetup() {
    this.localStorageService.delete();
    this.localStorageService.set(INIT_FLAG, true);
    this.localStorageService.set(USERNAME, this.username.trim());
    this.localStorageService.set(START_USING_DATE, this.getCurrentTime());
  }
  public getCurrentTime() {
    const time = moment(new Date());
    return time;
  }
}
