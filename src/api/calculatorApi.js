import delay from './delay';
import colorCodesApi from './colorCodesApi';

function validate(calculator, field, fieldName) {
    if(calculator[field] === null || calculator[field] === ""){
        return fieldName + " is required!";
    }
    return null;
}

function getValue(color){
    if(color.significantFigures){
        return color.significantFigures;
    }else{
        return -1;
    }
}

function getMultiplier(color){
    if(color.multiplier){
        return color.multiplier;
    }else{
        return -1;
    }
}

function getTolerance(color){
    if(color){
        if(color.tolerance){
            return color.tolerance;
        }else{
            return 0;
        }
    }else{
        return 0.2;
    }
}

class CalculatorApi{
    
    static calculate(calculator) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                let valAString = validate(calculator, 'bandAColor', 'BandA color');
                let valBString = validate(calculator, 'bandBColor', 'BandB color'); 
                let valCString = validate(calculator, 'bandCColor', 'BandC color');               
                if(valAString || valBString || valCString){
                    reject(valAString || valBString || valCString);
                }

                colorCodesApi.getAllColorCodes().then(

                    (colorCodes) =>{

                        let bandAColor = colorCodes.find(x => x.id === calculator.bandAColor);
                        let bandBColor = colorCodes.find(x => x.id === calculator.bandBColor);
                        let bandCColor = colorCodes.find(x => x.id === calculator.bandCColor);
                        
                        let bandDColor;

                        if(calculator.bandDColor !== null || calculator.bandDColor !== ""){
                            bandDColor = colorCodes.find(x => x.id === calculator.bandDColor);
                        }

                        let ohmValue = (getValue(bandAColor) * 10 + getValue(bandBColor)) * getMultiplier(bandCColor);
                        let tolerance = getTolerance(bandDColor);

                        calculator = Object.assign({}, calculator);
                        calculator.minValue = ohmValue - ohmValue * tolerance;  
                        calculator.maxValue = ohmValue + ohmValue * tolerance;             
                        resolve(calculator);

                    }

                ).catch(error => {
                    reject('error calculating, please try again!');
                });


            }, delay);
        });
    }

}

export default CalculatorApi;