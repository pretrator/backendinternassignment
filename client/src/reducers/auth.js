import types from "./../actions/types"

const initialState={
    token:null,
    loggedin:false,
    errormsg:null
};

export default function(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case types.LOGIN_STARTED:
            return {
                ...state,
                errormsg:null,
            }
        case types.GOT_USER_TOKEN:
            return {
                token:payload.token,
                loggedin:true
            }
        case types.LOGGED_OUT:
            return initialState
        case types.LOGIN_ERROR:
            return {
                ...state,
                errormsg:payload.msg
            }
        default:
            return state
    }
}