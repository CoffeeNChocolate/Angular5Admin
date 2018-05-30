import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './/app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LayoutModule } from './/layouts/layout.module';
import { ScriptLoaderService } from './_services/script-loader.service';
import { TablesComponent } from './pages/tables/tables.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { VendorComponent } from './pages/vendor/vendor.component';
import { OrderComponent } from './pages/orders/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesComponent } from './pages/notes/notes.component';
import { CheckListComponent } from './pages/checkList/check-list.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './helper/auth.guard';
import { AuthenticationService } from './pages/login/authentication.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './pages/registration/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertService } from './_services/alert.service';


@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    VendorComponent,
    OrderComponent,
    NotesComponent,
    CheckListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    TableModule,
    CalendarModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [ScriptLoaderService, AuthGuard, AuthenticationService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
