import {combineReducers} from 'redux';
import auth from "./auth"
import forgotpass from "./forgotpass"
export default combineReducers({
    auth,
    forgotpass
});