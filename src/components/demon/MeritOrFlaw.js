import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MeritOrFlaw extends Component {
  constructor(props) {
    super(props);

    this.onCostBlur = this.onCostBlur.bind(this);
    this.onLabelBlur = this.onLabelBlur.bind(this);
    this.state = {
      isCostActive: false,
      isLabelActive: false
    };
  }

  onCostBlur(e) {
    const value = e.target.value;
    this.props.onChangedCallback({name: this.props.data.name, cost: value, index: this.props.index});
  }

  onLabelBlur(e) {
    const value = e.target.value;
    this.props.onChangedCallback({name: value, cost: this.props.data.cost, index: this.props.index});
  }

  render() {
    const cost = this.props.data.cost;
    const label = this.props.data.name;
    const isMerit = cost >= 0;
    return (
      <div className='container'>
        <input className='label' value={label} onBlur={this.onLabelBlur} onChange={() => {}}/>
        <input className='cost' value={cost} onBlur={this.onCostBlur} onChange={() => {}}/>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-bottom: 10px;
            min-width: 150px;
            max-width: 250px;
            justify-self: space-between;
          }
          .label {
            flex-grow: 1.5;
            margin-right: 5px;
            padding-left: 5px;
            font-family: 'DEMON_SKER'
          }
          .cost {
            flex-grow: 0;
            max-width: 42px;
            min-width: 36px;
            text-align: center;
          }
          input {
            border: 2px solid #555;
            font-size: 24px;
            font-family: 'DEMON_SKER'
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