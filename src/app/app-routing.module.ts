import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './views/base/base.component';
import { ImageComponent} from './views/image/image.component';
import { UploadComponent } from './views/upload/upload.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SettingsComponent } from './views/settings/settings.component';



const routes: Routes = [
  //view
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: BaseComponent },
  { path: 'image', component: ImageComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },

  //inser auth later
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
