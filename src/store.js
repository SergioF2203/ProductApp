import {createStore} from "redux";
import SnackbarReducer from './reducers/snackbarReducer';

const store = createStore(SnackbarReducer);

export default store;