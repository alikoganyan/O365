import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { MsalModule } from '@azure/msal-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AlertsComponent } from './alerts/alerts.component';
import { OAuthSettings } from '../oauth';
import { ExcelComponent } from './excel/excel.component';
import { FolderComponent } from './folder/folder.component';

// Add FontAwesome icons
library.add(faExternalLinkAlt);
library.add(faUserCircle);
const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AlertsComponent,
    ExcelComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    MsalModule.forRoot({
      clientID: OAuthSettings.appId,
      postLogoutRedirectUri: 'http://localhost:4200/',
      // clientID: '07e14f66-a088-4253-9d41-a6f318cab4f4',
      // // authority: "https://login.microsoftonline.com/common/",
      // validateAuthority: true,
      // redirectUri: "http://localhost:4200/",
      // cacheLocation : "localStorage",
      // storeAuthStateInCookie: isIE, // set to true for IE 11
      // postLogoutRedirectUri: "http://localhost:4200/",
      // navigateToLoginRequestUrl: true,
      // popUp: !isIE,
      // consentScopes: [ "user.read", "openid", "profile", 'api://07e14f66-a088-4253-9d41-a6f318cab4f4/access_as_user'],
      // unprotectedResources: ["https://www.microsoft.com/en-us/"],
      // // protectedResourceMap: protectedResourceMap,
      // // logger: loggerCallback,
      // correlationId: '1234',
      // piiLoggingEnabled: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
