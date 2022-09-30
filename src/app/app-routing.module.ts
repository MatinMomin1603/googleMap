import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooglemapComponent } from './common/googleMap/googlemap/googlemap.component';

const routes: Routes = [
  {
    path: 'google-map', component: GooglemapComponent
  },
  {
    path: '', redirectTo: "google-map", pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
