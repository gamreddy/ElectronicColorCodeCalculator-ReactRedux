import * as types from './actionTypes';
import colorCodesApi from '../api/colorCodesApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadColorCodesSuccess(colorCodes){
    return {type:types.LOAD_COLOR_CODES_SUCCESS, colorCodes};
}

export function loadColorCodes(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return colorCodesApi.getAllColorCodes().then(
            colorCodes => {
                dispatch(loadColorCodesSuccess(colorCodes));
        }).catch(error=>{
            throw error;
        });
    };
}