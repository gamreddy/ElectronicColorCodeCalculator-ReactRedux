import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CalculatorForm from './CalculatorForm';
// import * as colorCodesActions from '../../actions/colorCodesActions';
import * as calculatorActions from '../../actions/calculatorActions';
import toastr from 'toastr';

class CalculatorPage extends React.Component{

    constructor(props, context) {
        super(props, context);

        this.state={
            calculator: Object.assign({}, this.props.calculator),
            errors: {},
            saving: false
          };

          this.updateCalculatorState = this.updateCalculatorState.bind(this);
          this.calculate = this.calculate.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.calculator.id != nextProps.calculator.id){
            this.setState({calculator:Object.assign({}, nextProps.calculator)});
        }
    }

    updateCalculatorState(event){
        const field = event.target.name;
        let calculator = this.state.calculator;
        calculator[field] = event.target.value;
        return this.setState({calculator: calculator});
    }

    calculate(event){
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.calculate(this.state.calculator).then(
          ()=>{
            this.setState({calculator: this.props.calculator});
            this.setState({saving: false});
            toastr.success('Calculation done.');
            
          }
        ).catch(
          (error) => {
            toastr.error(error);
            this.setState({saving: false});
          }
        );
        
    }

    render() {
        return (
              <CalculatorForm 
                allColors={this.props.colorCodes}
                onChange={this.updateCalculatorState}
                onCalculate={this.calculate}
                calculator={this.state.calculator}
                calculating={this.state.saving}   
                errors={this.state.errors}         
                />
        );
    }

}

CalculatorPage.propTypes = {
    calculator: PropTypes.object.isRequired,
    colorCodes: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

CalculatorPage.contextTypes = {
    router: PropTypes.object
  };

function mapStateToProps(state, ownProps) {
    let calculator = {id:'', bandAColor:'', bandBColor:'', bandCColor:'', bandDColor:'', minValue:0, maxValue:0};

    if(state.calculator){
      calculator = Object.assign({},state.calculator);
    }

    const colorsFormattedForDropdown = state.colorCodes.map(colorCode=>{
        return {
          value: colorCode.id,
          text: colorCode.name
        };
      });
    
      return {
        calculator: calculator,
        colorCodes: colorsFormattedForDropdown
      };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(calculatorActions, dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorPage);