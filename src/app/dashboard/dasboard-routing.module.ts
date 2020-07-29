import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { dashboardRutes } from './dashbporad.routes';
import { AuthGuardService } from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: dashboardRutes,
    //  canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class DasboardRoutingModule { }
