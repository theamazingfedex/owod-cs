import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { emptyCircularStyle, fullCircularStyle } from './RatingStyles';

class DottedInput extends Component {
  constructor(props) {
    super(props);

    this.onRatingChange = this.onRatingChange.bind(this);
    this.state = {
      value: props.initialValue || 0
    }
  }
  componentWillMount() {
    this.setState({value: this.props.initialValue || 0});
  }

  onRatingChange(value) {
    if (this.state.value === 1 && value === 1) {
      // set to zero if clicking on 1 when value is already 1
      this.setState({ value: 0 });
      this.props.onChangedCallback(0);
    }
    else {
      this.setState({
        value
      });
      this.props.onChangedCallback(value);
    }
  }

  render() {
    return (
      <div className='dotted-input'>
        <span className='label'>{this.props.displayLabel}</span>
        <div className='spacing'></div>
        <span className='rating'><Rating initialRating={this.state.value} emptySymbol={emptyCircularStyle} fullSymbol={fullCircularStyle} placeholderSymbol={fullCircularStyle} onClick={this.onRatingChange}/></span>
        <style jsx>{`
          .rating {
            flex-grow: 0;
          }
          .spacing {
            flex-grow: 3;
            border-bottom: 1px solid #aaa;
            margin: 0 0 2px 2px;
          }
          .label {
            flex-grow: 0;
          }
          .dotted-input {
            display: flex;
            width: 250px;
          }
        `}</style>
      </div>
    );
  }
};

DottedInput.propTypes = {
  displayLabel: PropTypes.string.isRequired,
  initialValue: PropTypes.number,
  onChangedCallback: PropTypes.func.isRequired
}

export default DottedInput;