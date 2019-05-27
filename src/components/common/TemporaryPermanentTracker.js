import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { emptyCircularStyle,
        fullCircularStyle,
        emptySquareStyle,
        fullSquareStyle } from './RatingStyles';

class TemporaryPermanentTracker extends Component {
  constructor(props) {
    super(props);

    this.onTempChanged = this.onTempChanged.bind(this);
    this.onPermChanged = this.onPermChanged.bind(this);
  }

  onTempChanged(value) {
    if (value === 1 && this.props.temporaryValue === 1) {
      this.props.onChangedCallback({temporary: 0, permanent: this.props.permanentValue});
    }
    else if (value <= this.props.permanentValue) {
      this.props.onChangedCallback({temporary: value, permanent: this.props.permanentValue});
    } else {
      this.props.onChangedCallback({temporary: this.props.permanentValue, permanent: this.props.permanentValue});
    }
  }

  onPermChanged(value) {
    if (value === 1 && this.props.permanentValue === 1) {
      this.props.onChangedCallback({temporary: 0, permanent: 0});
    }
    else if (value < this.props.temporaryValue) {
      this.props.onChangedCallback({temporary: value, permanent: value});
    } else {
      this.props.onChangedCallback({temporary: this.props.temporaryValue, permanent: value});
    }
  }

  render() {
    return (
      <div className='temp-permanent-tracker'>
        <div className='header'>
          <div className='spacing'></div>
          <h5>{this.props.label}</h5>
          <div className='spacing'></div>
        </div>
        <Rating stop={10} initialRating={this.props.permanentValue} emptySymbol={emptyCircularStyle} fullSymbol={fullCircularStyle} placeholderSymbol={fullCircularStyle} onClick={this.onPermChanged}/>
        <Rating stop={10} initialRating={this.props.temporaryValue} emptySymbol={emptySquareStyle} fullSymbol={fullSquareStyle} placeholderSymbol={fullSquareStyle} onClick={this.onTempChanged} />
        <style jsx>{`
          .temp-permanent-tracker {
            display: flex;
            flex-direction: column;
            min-width: 200px;
          }
          .header {
            display: flex;
          }
          .spacing {
            border-top: 2px solid black;
            margin-top: 20px;
            flex-grow: 2;
          }
          h5 {
            margin: 10px;
            align-self: center;
            flex-grow: 0;
          }
        `}</style>
      </div>
    );
  }
}

TemporaryPermanentTracker.propTypes = {
  label: PropTypes.string.isRequired,
  permanentValue: PropTypes.number.isRequired,
  temporaryValue: PropTypes.number.isRequired,
  onChangedCallback: PropTypes.func.isRequired,
  isTorment: PropTypes.bool
};

export default TemporaryPermanentTracker;