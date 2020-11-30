import { DefaultRootState } from 'react-redux';
import {Action} from 'redux';

export interface User {
    name: string,
    age: number
}

export interface LoadingState {
    users: boolean
}

export interface ApplicationState extends DefaultRootState {
    loading: LoadingState;
    users: User[];
    error: string;
}

export interface LoadUsersRequest extends Action {
    type: string;
}

export interface LoadUsersSuccess extends Action {
    type: string;
    users: User[];
}

export interface LoadUsersError extends Action {
    type: string;
    error: string;
}

export type ApplicationAction = LoadUsersRequest | LoadUsersSuccess | LoadUsersError;