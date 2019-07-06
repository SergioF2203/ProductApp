import * as types from '../actions/actionTypes';

const initialState = {
    snackbar: {
        open: false,
        message: ""
    }
};

export default function (state = initialState, action) {

    switch (action.type) {
        case types.SHOW_SNACKBAR: {
            return {
                ...state,
                snackbar: {
                    open: true,
                    message: action.message
                }
            };
        }
        case types.CLEAR_SNACKBAR: {
            return {
                ...state,
                snackbar: {
                    open: false,
                    message: ""
                }
            };
        }
    }

    return state
}

