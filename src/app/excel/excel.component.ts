import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExcelService} from '../services/excel.service';
import {Excel} from '../models/excel';
import {DateTimeTimeZone} from '../models/event';
import * as moment from 'moment-timezone';
import {AlertsService} from '../services/alerts.service';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {
  private _folderId: string;
  public loader: boolean;
  public excels: Excel[];

  constructor(private activatedRoute: ActivatedRoute,
              private excelService: ExcelService,
              private alertsService: AlertsService) {
  }

  ngOnInit() {
    this.loader = false;
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.params.subscribe(params => {
      this._folderId = params.id;
    });
    this.excelService.getExcels(this._folderId)
      .then((excels) => {
        this.excels = excels;
        console.log(excels);
        this.loader = true;
      });
    // this.getExcels(this._folderId);
  }

  formatDateTimeTimeZone(dateTime: DateTimeTimeZone): string {
    try {
      return moment.tz(dateTime.dateTime, dateTime.timeZone).format();
    } catch (error) {
      this.alertsService.add('DateTimeTimeZone conversion error', JSON.stringify(error));
    }
  }

}
