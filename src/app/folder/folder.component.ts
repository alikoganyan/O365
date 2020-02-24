import { Component, OnInit } from '@angular/core';
import {DateTimeTimeZone} from '../models/event';
import {FolderService} from '../services/folder.service';
import {AlertsService} from '../services/alerts.service';
import * as moment from 'moment-timezone';
import {Folders} from '../models/folder';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  public loader: boolean;
  private folders: Folders[];

  constructor(
    private folderService: FolderService,
    private alertsService: AlertsService) { }

  ngOnInit() {
    this.loader = false;
    this.folderService.getFolders()
      .then((folders) => {
        this.folders = folders;
        this.loader = true;
        console.log(this.folders);
      });
  }

  formatDateTimeTimeZone(dateTime: DateTimeTimeZone): string {
    try {
      return moment.tz(dateTime.dateTime, dateTime.timeZone).format();
    } catch (error) {
      this.alertsService.add('DateTimeTimeZone conversion error', JSON.stringify(error));
    }
  }
}
