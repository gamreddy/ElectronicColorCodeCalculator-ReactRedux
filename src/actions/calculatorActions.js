import * as types from './actionTypes';
import colorCodesApi from '../api/colorCodesApi';
import calculatorApi from '../api/calculatorApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function calculateSuccess(calculator){
    return {type:types.CALCULATE_CALCULATOR_SUCCESS, calculator};
}

export function calculate(calculator){
    return function(dispatch, getState){
        //dispatch(beginAjaxCall());
        return calculatorApi.calculate(calculator).then( savedCalculator => {
            dispatch(calculateSuccess(savedCalculator));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });

        // return calculatorApi.calculate(calculator).then( savedCalculator => {
        //     dispatch(calculateSuccess(savedCalculator));
        // }).catch(error => {
        //     dispatch(ajaxCallError(error));
        //     throw(error);
        // });
    };

}