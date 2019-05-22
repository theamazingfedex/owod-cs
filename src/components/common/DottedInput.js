import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { relative } from 'path';

const style = {
  display: 'inline-block',
  borderRadius: '50%',
  border: '5px double white',
  width: 10,
  height: 10
};

const emptyStyle = {
  ...style,
  backgroundColor: '#CCC'
};

const fullStyle = {
  ...style,
  backgroundColor: 'black'
};

class DottedInput extends Component {
  constructor(props) {
    super(props);

    this.onRatingChange = this.onRatingChange.bind(this);
    this.state = {
      value: props.initialValue
    }
  }
  componentWillMount() {
    this.setState({value: this.props.initialValue});
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
        <span className='rating'><Rating initialRating={this.state.value} emptySymbol={emptyStyle} fullSymbol={fullStyle} placeholderSymbol={fullStyle} onClick={this.onRatingChange}/></span>
        <style jsx>{`
          .rating {
            flex-grow: 0;
          }
          .spacing {
            flex-grow: 3;
            border-bottom: 1px solid black;
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
  initialValue: PropTypes.number.isRequired,
  onChangedCallback: PropTypes.func.isRequired
}

export default DottedInput;