import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

import { HomeComponent} from './components/home/index'
import { AddressListComponent} from './components/address/index'
import { AddressDetailComponent} from './components/address/index'
import { HeaderComponent } from './components/layouts/headers/index';
import { PageNotFoundComponent } from './components/layouts/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    AddressListComponent,
    AddressDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
