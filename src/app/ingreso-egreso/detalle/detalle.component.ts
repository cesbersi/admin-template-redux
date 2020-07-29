import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromIngresoEgreso from '../ingres-egreso.reducer';
import { IngresoEgreso } from '../ingreso-egreso.model';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../ingreso-egreso.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit, OnDestroy {


  ingresoEgresoSubscrition: Subscription = new Subscription();

  items: IngresoEgreso[];

  constructor(private store: Store<fromIngresoEgreso.AppState>, private ingresoEgresoService: IngresoEgresoService) { }

  ngOnInit() {
    this.ingresoEgresoSubscrition = this.store.select('ingresoEgreso').subscribe(items => {
      this.items = items.items;
    });
  }

  ngOnDestroy(): void {
    this.ingresoEgresoSubscrition.unsubscribe();
  }

  borrarItem(item: IngresoEgreso) {
    this.ingresoEgresoService.borrarIngresoEgreso(item.uid)
      .then(() => Swal('Eliminado', item.descripcion, 'success'));

  }

}
