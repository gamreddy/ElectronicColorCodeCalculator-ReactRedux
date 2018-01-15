import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function calculatorReducer(state = initialState.calculator, action){
    switch(action.type){
        case types.CALCULATE_CALCULATOR_SUCCESS:
            return Object.assign({}, action.calculator);            
        default:
            return state;
    }
}