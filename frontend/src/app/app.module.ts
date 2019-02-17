import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
