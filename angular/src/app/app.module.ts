import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './/app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LayoutModule } from './/layouts/layout.module';
import { ScriptLoaderService } from './_services/script-loader.service';
import { TablesComponent } from './pages/tables/tables.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { VendorComponent } from './pages/vendor/vendor.component';
import { OrderComponent } from './pages/orders/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesComponent } from './pages/notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    VendorComponent,
    OrderComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
