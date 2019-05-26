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
    this.state = {
      permanentValue: props.permanentValue,
      temporaryValue: props.temporaryValue
    }
  }

  onTempChanged(value) {
    if (this.props.isTorment && value === this.state.permanentValue) {
      // TODO: find out if temporary torment is lowered when permanent is increased.
      this.setState({permanentValue: this.state.permanentValue + 1})
    }
    if (!this.props.isTorment && value === 0) {
      this.setState({permanentValue: this.state.permanentValue - 1});
      // TODO: find out if temporary faith/willpower is reset when permanent is decreased.
    }
  }

  render() {
    return (
      <div>
        <h4>{this.props.label}</h4>
        <Rating initialRating={this.state.value} emptySymbol={emptyCircularStyle} fullSymbol={fullCircularStyle} placeholderSymbol={fullCircularStyle} />
        <Rating initialRating={this.state.value} emptySymbol={emptySquareStyle} fullSymbol={fullSquareStyle} placeholderSymbol={fullSquareStyle} onClick={this.onTempChange} />
        <style jsx>{`
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