import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HealthTracker extends Component {
  constructor(props) {
    super(props);

    this.buildHealthRow = this.buildHealthRow.bind(this);
    this.onCheckboxClicked = this.onCheckboxClicked.bind(this);
    this.state = {
      activeCheckboxIndex: this.props.currentValue || -1
    };
  }

  onCheckboxClicked(index) {
    return () => {
      let updatedHealthValue =
        this.state.activeCheckboxIndex === index
          ? -1
          : index;
      this.setState({activeCheckboxIndex: updatedHealthValue});
      this.props.onChangedCallback(updatedHealthValue);
    };
  }

  buildHealthRow(index, label, demerit = 0) {
    const isRowActivated = this.state.activeCheckboxIndex > -1 && this.state.activeCheckboxIndex === index;
    const isActiveClass = isRowActivated ? ' active' : '';
    const checkboxClass = 'checkbox' + isActiveClass;
    return (
      <div className={'health-row ' + label} key={index}>
        <div className='label'>{label.charAt(0).toUpperCase() + label.slice(1)}</div>
        <div className='spacing'></div>
        <span className='demerit'>{demerit === 0 ? '' : `-${demerit}`}</span>
        <div className='spacing'></div>
        <div className={checkboxClass} onClick={this.onCheckboxClicked(index)}>{isRowActivated ? 'X' : ''}</div>
        <style jsx>{`
          .health-row {
            display: flex;
            justify-content: space-around;
            margin-bottom: 5px;
          }
          .health-row > .spacing:nth-child(4) {
            min-width: 100px;
            max-width: 100px;
          }
          .spacing, .demerit {
            border-bottom: 1px solid #ccc;
            flex-grow:1
          }
          .demerit {
            max-width: 24px;
          }
          .label {
            flex-grow: 0;
          }
          .checkbox {
            width: 20px;
            height: 20px;
            border: 2px solid black;
            box-shadow: 2px 2px 2px #555;
            text-align: center;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }

  render() {
    return (
      <div className='health-tracker'>
        {
          this.props.healthEntries.map((entry, idx) => this.buildHealthRow(idx, entry.label, entry.demerit))
        }
        <style jsx>{`
          .health-tracker {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}

HealthTracker.propTypes = {
  healthEntries: PropTypes.array.isRequired,
  currentValue: PropTypes.number.isRequired,
  onChangedCallback: PropTypes.func.isRequired
};

export default HealthTracker;