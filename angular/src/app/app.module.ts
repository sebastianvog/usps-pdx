import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PdxServiceService} from './pdx-service.service'
import { DefaultApi} from './api/api/DefaultApi'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PdxServiceService, DefaultApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
