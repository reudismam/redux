import {
User, 
LoadUsersError, 
LoadUsersSuccess, 
LoadUsersRequest} from './types';

import {SUCCESS, ERROR, REQUEST} from './consts';

export const loadUsersRequest = (): LoadUsersRequest => ({
    type: REQUEST
})

export const loadUsersSuccess = (users: User[]): LoadUsersSuccess => ({
    type: SUCCESS,
    users
})

export const loadUsersError = (error: string): LoadUsersError => ({
    type: ERROR,
    error
})