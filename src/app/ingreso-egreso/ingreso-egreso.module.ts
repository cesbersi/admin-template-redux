import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { DetalleComponent } from './detalle/detalle.component';
import { OrderIngresoEgresoPipe } from './order-ingreso-egreso.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { DasboardRoutingModule } from '../dashboard/dasboard-routing.module';
import { StoreModule } from '@ngrx/store';
import { ingresoEgresoReducer } from './ingres-egreso.reducer';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,
    SharedModule,
    DasboardRoutingModule,
    StoreModule.forFeature('ingresoEgreso', ingresoEgresoReducer)
  ],
  declarations: [
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    OrderIngresoEgresoPipe
  ]

})
export class IngresoEgresoModule { }
