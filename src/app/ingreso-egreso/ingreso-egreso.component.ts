import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngresoEgreso } from './ingreso-egreso.model';
import { IngresoEgresoService } from './ingreso-egreso.service';

import * as fromIngresoEgreso from './ingres-egreso.reducer';

import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../shared/ui.actions';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit, OnDestroy {


  forma: FormGroup;
  tipo = 'egreso';

  loadingSubs: Subscription = new Subscription();

  cargando: boolean;

  constructor(private ingresoEngresoService: IngresoEgresoService, private store: Store<fromIngresoEgreso.AppState>) { }

  ngOnInit() {

    this.forma = new FormGroup({
      'descripcion': new FormControl('', Validators.required),
      'monto': new FormControl(1, Validators.min(1)),
    });

    this.loadingSubs = this.store.select('ui').subscribe(cargando => {
      this.cargando = cargando.isLoading;
    });

  }

  crearIngresoEgreso() {

    this.store.dispatch(new ActivarLoadingAction());

    const ingresoEngreso = new IngresoEgreso({ ...this.forma.value, tipo: this.tipo });
    this.ingresoEngresoService.crearIngresoEgreso(ingresoEngreso).then(() => {
      this.store.dispatch(new DesactivarLoadingAction());
      this.forma.reset({ monto: 1 });
      Swal('Creado', ingresoEngreso.descripcion, 'success');

    }).catch(e => {
      this.store.dispatch(new DesactivarLoadingAction());
      Swal('Error', e, 'error');
    });

  }

  ngOnDestroy(): void {
    this.loadingSubs.unsubscribe();
  }
}
