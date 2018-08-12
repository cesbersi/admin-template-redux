import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IngresoEgresoService } from '../../ingreso-egreso/ingreso-egreso.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {

  nombre: string;

  subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>, private authService: AuthService, private ingresoEgresoService: IngresoEgresoService) { }

  ngOnInit() {
    this.subscription = this.store.select('auth')
      .pipe(
        filter(auth => auth.user != null)
      )
      .subscribe(auth => {
        this.nombre = auth.user.nombre;
      });
  }

  logout() {
    this.authService.logout();
    this.ingresoEgresoService.cancelarSubscritions();

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
