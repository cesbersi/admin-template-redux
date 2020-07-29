import { ActionReducerMap } from '@ngrx/store';
import * as fromUI from './shared/ui.reducer';
import * as fromAuth from './auth/auth.reducer';
// import * as fromIngresoEgreso from './ingreso-egreso/ingres-egreso.reducer';

export interface AppState {
    ui: fromUI.State;
    auth: fromAuth.AuthState;
    //  ingresoEgreso: fromIngresoEgreso.IngresoEgresoState;
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: fromUI.uiReducer,
    auth: fromAuth.auhtReducer,
    // ingresoEgreso: fromIngresoEgreso.ingresoEgresoReducer
};



