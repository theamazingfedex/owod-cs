import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { emptyCircularStyle,
        fullCircularStyle,
        emptySquareStyle,
        fullSquareStyle } from './RatingStyles';

class TemporaryPermanentTracker extends Component {
  // TODO: make this a stateless component
  constructor(props) {
    super(props);

    this.onTempChanged = this.onTempChanged.bind(this);
    this.onPermChanged = this.onPermChanged.bind(this);
    this.increaseDotMargins = this.increaseDotMargins.bind(this);
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

  increaseDotMargins(style) {
    return {...style, marginRight: 10};
  }

  render() {
    return (
      <div className='temp-permanent-tracker'>
        <div className='header'>
          <div className='arrow-left'></div>
          <h5>{this.props.label}</h5>
          <div className='arrow-right'></div>
        </div>
        <div className='ratings'>
          <div className='permanent'>
            <Rating stop={10} initialRating={this.props.permanentValue} emptySymbol={this.increaseDotMargins(emptyCircularStyle)} fullSymbol={this.increaseDotMargins(fullCircularStyle)} placeholderSymbol={this.increaseDotMargins(fullCircularStyle)} onClick={this.onPermChanged} />
          </div>
          <div className='temporary'>
            <Rating stop={10} initialRating={this.props.temporaryValue} emptySymbol={this.increaseDotMargins( emptySquareStyle )} fullSymbol={this.increaseDotMargins( fullSquareStyle )} placeholderSymbol={this.increaseDotMargins( fullSquareStyle )} onClick={this.onTempChanged} />
          </div>
        </div>
        <style jsx>{`
          .temp-permanent-tracker {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 10px;
          }
          .header {
            display: flex;
          }
          .ratings {
            display: flex;
            flex-direction: column;
            align-self: center;
          }
          .temporary {
            margin-top: 5px;
          }
          .arrow-left {
            flex-grow:2;
            margin-top: 16px;
            width: 1px;
            height: 1px;
            border-top: 2px solid transparent;
            border-bottom: 2px solid transparent;
            border-right: solid 90px black;
          }
          .arrow-right {
            flex-grow:2;
            margin-top: 16px;
            width: 1px;
            height: 1px;
            border-top: 2px solid transparent;
            border-bottom: 2px solid transparent;
            border-left: 90px solid black;
          }
          h5 {
            margin: 10px;
            align-self: center;
            flex-grow: 0;
            font-weight: normal;
          }
        `}</style>
      </div>
    );
  }
}

TemporaryPermanentTracker.propTypes = {
  isTorment: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChangedCallback: PropTypes.func.isRequired,
  permanentValue: PropTypes.number.isRequired,
  temporaryValue: PropTypes.number.isRequired
};

export default TemporaryPermanentTracker;