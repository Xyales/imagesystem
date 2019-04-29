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
import { SettingsComponent } from './views/settings/settings.component';
import { ProfileComponent } from './views/profile/profile.component';
import { BaseComponent } from './views/base/base.component';
import { ImageComponent } from './views/image/image.component';
import { UploadComponent } from './views/upload/upload.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { VerifyComponent } from './auth/verify/verify.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    ProfileComponent,
    BaseComponent,
    ImageComponent,
    UploadComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SidebarModule,
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
