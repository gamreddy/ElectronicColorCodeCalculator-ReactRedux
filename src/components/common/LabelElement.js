import React, {PropTypes} from 'react';

const LabelElement = ({name, label, minValue, maxValue}) =>{
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}: between {minValue} and {maxValue}</label>
         </div>
    );
};

LabelElement.propTypes = {
    name: PropTypes.string.isRequired, 
    minValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
};

export default LabelElement;            