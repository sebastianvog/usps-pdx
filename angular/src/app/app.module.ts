import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PdxServiceService} from './pdx-service.service'
import { DefaultApi} from './api/api/DefaultApi'
import {DropdownModule } from 'ng2-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DropdownModule.forRoot()
  ],
  providers: [PdxServiceService, DefaultApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
