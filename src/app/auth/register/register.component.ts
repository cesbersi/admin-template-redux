import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {

  cargando: boolean;

  susbcription: Subscription = new Subscription();

  constructor(private authService: AuthService, private store: Store<AppState>) { }

  ngOnInit() {
    this.susbcription = this.store.select('ui').subscribe(ui => {
      this.cargando = ui.isLoading;
    });
  }

  ngOnDestroy() {
    this.susbcription.unsubscribe();
  }

  onSubmit(data: any) {

    this.authService.crearUsuario(data.nombre, data.email, data.password);

  }

}
