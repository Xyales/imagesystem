import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ExportComponent } from './views/export/export.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ReportcalendarComponent } from './views/reportcalendar/reportcalendar.component';
import { ReportlistComponent } from './views/reportlist/reportlist.component';
import { SettingsComponent } from './views/settings/settings.component';
import { UserlistComponent } from './views/userlist/userlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reportcalendar', component: ReportcalendarComponent },
  { path: 'reportlist', component: ReportlistComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'export', component: ExportComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
