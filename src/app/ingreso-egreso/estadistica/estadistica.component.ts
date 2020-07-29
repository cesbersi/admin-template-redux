import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { IngresoEgreso } from '../ingreso-egreso.model';

import * as fromIngresoEgreso from '../ingres-egreso.reducer';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit, OnDestroy {


  ingresos: number;
  egresos: number;

  cuantosIngresos: number;
  cuantosEgresos: number;

  ingresoEgresoSubscription: Subscription = new Subscription();

  public doughnutChartLabels: string[] = ['Ingresos', 'Egresos'];
  public doughnutChartData: number[] = [];

  constructor(private store: Store<fromIngresoEgreso.AppState>) { }

  ngOnInit() {
    this.ingresoEgresoSubscription = this.store.select('ingresoEgreso').subscribe(it => {
      this.contarIngresoEgreso(it.items);

    });
  }


  private contarIngresoEgreso(items: IngresoEgreso[]) {
    this.ingresos = 0;
    this.egresos = 0;
    this.cuantosIngresos = 0;
    this.cuantosEgresos = 0;

    items.forEach(item => {

      if (item.tipo === 'ingreso') {
        this.cuantosIngresos++;
        this.ingresos += item.monto;
      } else {
        this.cuantosEgresos++;
        this.egresos += item.monto;
      }
    });

    this.doughnutChartData = [this.ingresos, this.egresos];
  }


  ngOnDestroy(): void {
    this.ingresoEgresoSubscription.unsubscribe();
  }

}
