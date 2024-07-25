import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    title: 'Biggmall Home',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
