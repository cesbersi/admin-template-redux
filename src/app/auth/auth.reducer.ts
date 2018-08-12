import * as fromAuth from './auth.actions';
import { User } from './user.model';


export interface AuthState {
    user: User;
}

const estadoInicial: AuthState = {
    user: null
};

export function auhtReducer(state = estadoInicial, action: fromAuth.authAcciones): AuthState {

    switch (action.type) {

        case fromAuth.SET_USER:
            return {
                user: { ...action.user }
            };

        case fromAuth.UNSET_USER:
            return {
                user: null
            };

        default:
            return state;
    }
}

