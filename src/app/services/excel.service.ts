import {Injectable} from '@angular/core';
import {Client} from '@microsoft/microsoft-graph-client';

import {AuthService} from './auth.service';
import {AlertsService} from './alerts.service';
import {Excel} from '../models/excel';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  private graphClient: Client;

  constructor(
    private authService: AuthService,
    private alertsService: AlertsService) {

    // Initialize the Graph client
    this.graphClient = Client.init({
      authProvider: async (done) => {
        // Get the token from the auth service
        const token = await this.authService.getAccessToken()
          .catch((reason) => {
            done(reason, null);
          });

        if (token) {
          done(null, token);
        } else {
          done('Could not get an access token', null);
        }
      }
    });
  }

  async getExcels(id: string): Promise<Excel[]> {
    try {
      const url = `/me/drive/items/${id}/children`;
      const result = await this.graphClient
        .api(url)
        .get();

      return result.value;
    } catch (error) {
      this.alertsService.add('Could not get excel', JSON.stringify(error, null, 2));
    }
  }
}
