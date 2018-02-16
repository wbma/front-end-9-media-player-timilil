import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {FormsModule} from '@angular/forms';
import {MediaServiceService} from './media-service.service';
import {HttpClientModule} from '@angular/common/http';
import { UploadComponent } from './upload/upload.component';
import { ThumbnailPipe } from './pipes/thumbnail.pipe';
import { ViewfileComponent } from './viewfile/viewfile.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    TopBarComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    UploadComponent,
    ThumbnailPipe,
    ViewfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MediaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
