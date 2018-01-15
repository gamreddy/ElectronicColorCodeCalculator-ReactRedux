import React from 'react';
import SelectInput from '../common/SelectInput';
import LabelElement from '../common/LabelElement';

const CalculatorForm = ({calculator, allColors, onCalculate, onChange, calculating, errors}) => {
    return (
        <form>
            <SelectInput
                name="bandAColor"
                label="Band A Color"
                value={calculator.bandAColor}
                defaultOption="Select Color"
                options={allColors}
                onChange={onChange}
                error={errors.bandAColor} />
            <SelectInput
                name="bandBColor"
                label="Band B Color"
                value={calculator.bandBColor}
                defaultOption="Select Color"
                options={allColors}
                onChange={onChange} 
                error={errors.bandBColor}/>      
            <SelectInput
                name="bandCColor"
                label="Band C Color"
                value={calculator.bandCColor}
                defaultOption="Select Color"
                options={allColors}
                onChange={onChange} 
                error={errors.bandCColor}/>   
            <SelectInput
                name="bandDColor"
                label="Band D Color"
                value={calculator.bandDColor}
                defaultOption="Select Color"
                options={allColors}
                onChange={onChange} 
                error={errors.bandDColor}/> 
            <input
                type="submit"
                disabled={calculating}
                value={calculating?'Calculating...':'Calculate'}
                className="btn btn-primary"
                onClick={onCalculate}/> 
            <LabelElement
                name="resistance"
                label="OhmValue"
                minValue={calculator.minValue}
                maxValue={calculator.maxValue}/>                                                
        </form>
    );
};

CalculatorForm.propTypes = {
    calculator: React.PropTypes.object.isRequired,
    allColors: React.PropTypes.array, 
    onCalculate: React.PropTypes.func.isRequired, 
    onChange: React.PropTypes.func.isRequired,
    calculating: React.PropTypes.bool.isRequired,
    errors: React.PropTypes.object
};

export default CalculatorForm;