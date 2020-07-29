import * as fromIngresoEgreso from './ingres-egreso.actions';
import { IngresoEgreso } from './ingreso-egreso.model';
import { AppState } from '../app.reducer';

export interface IngresoEgresoState {
    items: IngresoEgreso[];
}

export interface AppState extends AppState {

    ingresoEgreso: IngresoEgresoState;
}

const estadoInicial: IngresoEgresoState = {
    items: []
};

export function ingresoEgresoReducer(state = estadoInicial, action: fromIngresoEgreso.ingresoEgresoAcciones): IngresoEgresoState {

    switch (action.type) {

        case fromIngresoEgreso.SET_ITEMS:
            return {
                items: [
                    ...action.items.map(item => {
                        return {
                            ...item
                        };
                    })
                ]
            };


        case fromIngresoEgreso.UNSET_ITEMS:
            return {
                items: []
            };

        default:
            return state;
    }
}

