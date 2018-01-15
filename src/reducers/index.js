import {combineReducers} from 'redux';
import colorCodes from './colorCodesReducer';
import calculator from './calculatorReducer';

const rootReducer = combineReducers({
    colorCodes, calculator
});

export default rootReducer;