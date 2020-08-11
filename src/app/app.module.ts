import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultBoardComponent } from './result-board/result-board.component';
import { AdmissionComponent } from './admission-form/admission.component';
import { TableModule } from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {KeyFilterModule} from 'primeng/keyfilter';

@NgModule({
  declarations: [
    AppComponent,
    ResultBoardComponent,
    AdmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TabViewModule,
    TableModule,MessagesModule,MessageModule,KeyFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
