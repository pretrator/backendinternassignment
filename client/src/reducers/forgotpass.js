import types from "./../actions/types"

const initialState={
    newdata:null
};

export default function(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case types.FORGOTPASSWORD:
            return {
                ...state,
                newdata:payload.msg,
            }
        default:
            return state
    }
}