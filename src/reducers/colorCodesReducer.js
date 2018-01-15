import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function colorCodesReducer(state = initialState.colorCodes, action){
    switch(action.type){
        case types.LOAD_COLOR_CODES_SUCCESS:
            return action.colorCodes;
        default:
            return state;
    }
}