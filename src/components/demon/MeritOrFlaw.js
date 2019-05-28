import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MeritOrFlaw extends Component {
  constructor(props) {
    super(props);

    this.labelInput = React.createRef();
    this.costInput = React.createRef();
    this.onCostBlur = this.onCostBlur.bind(this);
    this.onLabelBlur = this.onLabelBlur.bind(this);
    this.state = {
      isCostActive: false,
      isLabelActive: false,
      label: props.data.name || '',
      cost: props.data.cost || 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.name == '') {
      this.setState({label: ''});
    }
    if (nextProps.data.cost == 0) {
      this.setState({cost: 0});
    }
  }

  componentDidUpdate() {
    if (!!this.labelInput && this.labelInput.current) {
      this.labelInput.current.focus();
    }
    if (!!this.costInput && !!this.costInput.current) {
      this.costInput.current.focus();
    }
  }

  onCostBlur(e) {
    const value = e.target.value;
    const propValue = this.props.data.cost;
    if (value != propValue) {
    console.log(`newcostvalue: ${value} stateValue: ${this.state.cost} propValue: ${propValue}`);
      this.props.onChangedCallback({name: this.state.name, cost: value, index: this.props.index});
    }
    this.setState({isCostActive: false});
  }

  onLabelBlur(e) {
    const value = e.target.value;
    const propValue = this.props.data.name;
    if (value != propValue) {
      console.log(`newcostvalue: ${value} stateValue: ${this.state.name} propValue: ${propValue}`);
      this.props.onChangedCallback({name: value, cost: this.props.data.cost, index: this.props.index});
    }
    this.setState({isLabelActive: false});
  }

  render() {
    return (
      <div className='container'>
        {
          this.state.isLabelActive
            ? <input className='label input' value={this.state.label} onBlur={this.onLabelBlur} onChange={(e) => this.setState({label: e.target.value})} ref={this.labelInput}/>
            : <p className='label p' onClick={() => this.setState({isLabelActive: true})}>{this.state.label}</p>
        }
        {
          this.state.isCostActive
            ? <input className='cost input' value={this.state.cost} onBlur={this.onCostBlur} onChange={(e) => this.setState({cost: e.target.value})} ref={this.costInput}/>
            : <p className='cost p' onClick={() => this.setState({isCostActive: true})}>{this.state.cost}</p>
        }
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            justify-self: space-between;
          }
          .label {
            width: 200px;
            flex-grow: 1.5;
            margin-right: 5px;
            font-family: 'DEMON_SKER'
          }
          .cost {
            flex-grow: 0;
            width: 42px;
            text-align: center;
          }
          .label.input {
            width: 204px;
          }
          .cost.input {
            width: 46px;
          }
          input {
            height: 24px;
            background: #EEE;
            padding-top: 4px;
            margin-bottom: 26px;
          }
          p {
            padding: 1px 2px;
            background: #CCC;
            height: 24px;
            width: 200px;
            margin-top: 0;
          }
          * {
            font-family: 'DEMON_SKER';
            font-size: 24px;
          }
        `}</style>
      </div>
    );
  }
}

MeritOrFlaw.propTypes = {
  data: PropTypes.object.isRequired,
  onChangedCallback: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default MeritOrFlaw;