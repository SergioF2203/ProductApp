import * as types from './actionTypes';

export function showSnackbar(message) {
    return{
        type: types.SHOW_SNACKBAR,
        message
    };
}

export function clearSnackbar() {
    return{
        type: types.CLEAR_SNACKBAR,
    };
}