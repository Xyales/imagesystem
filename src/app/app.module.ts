import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { HttpModule } from '@angular/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { SidebarModule, MenuAllModule, TreeViewAllModule} from '@syncfusion/ej2-angular-navigations';
import { RadioButtonModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';

import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SettingsComponent } from './views/settings/settings.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ExportComponent } from './views/export/export.component';
import { UserlistComponent } from './views/userlist/userlist.component';
import { ReportlistComponent } from './views/reportlist/reportlist.component';
import { ReportcalendarComponent } from './views/reportcalendar/reportcalendar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    ProfileComponent,
    ExportComponent,
    UserlistComponent,
    ReportlistComponent,
    ReportcalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule, 
    BrowserModule, 
    RadioButtonModule, 
    MenuAllModule, 
    DropDownListModule, 
    ButtonModule, 
    TreeViewAllModule, 
    ListViewAllModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
