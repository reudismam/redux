import {ApplicationState, ApplicationAction, LoadUsersSuccess, LoadUsersError} from './types';
import {REQUEST, SUCCESS, ERROR} from './consts';

export const initialState: ApplicationState = {
    loading: {
        users: true,
    },
    users: [],
    error: ""
}

const reducer = (state = initialState, action: ApplicationAction) => {
    switch(action.type) {
        case REQUEST: {
            let counterState = {users: true}
            return {...state, loading: counterState}
        }

        case SUCCESS: {
            let loadingState = {users: false}
            const sucessAction:LoadUsersSuccess = action as LoadUsersSuccess;
            state = {...state, loading: loadingState};
            state = {...state, users: sucessAction.users, error: ""}
            return state;
        }
        case ERROR: {
            const errorAction:LoadUsersError = action as LoadUsersError;
            let loadingState = {users: false}
            return {...state, loading:loadingState, error: errorAction.error}
        }

        default:
            return state;
    }
}

export default reducer;