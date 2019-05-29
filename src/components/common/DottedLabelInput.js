import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { emptyCircularStyle, fullCircularStyle } from './RatingStyles';

class DottedLabelInput extends Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.textView = React.createRef();
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputKeyUp = this.onInputKeyUp.bind(this);
    this.onRatingChange = this.onRatingChange.bind(this);
    this.onRatingHover = this.onRatingHover.bind(this);
    this.activateInput = this.activateInput.bind(this);
    this.state = { label: this.props.displayLabel, value: this.props.initialValue, isActive: false, hoveredValue: 0 };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.displayLabel == '') {
      this.setState({label: ''});
    }
    if (nextProps.initialValue == 0) {
      this.setState({value: 0});
    }
  }

  componentDidUpdate() {
    if (!!this.textInput.current) {
      this.textInput.current.focus();
    }
  }

  onInputBlur(e) {
    const label = e.target.value;
    const value = this.state.value === 0 ? this.state.hoveredValue : this.state.value
    this.setState({label: label, value: value, isActive: false});
    this.props.onChangedCallback({label: label, value: value, index: this.props.index});
  }

  onInputChange(e) {
    this.setState({label: e.target.value, hoveredValue: this.state.value});
  }

  onInputKeyUp(e) {
    const keyPressed = e.keyCode;
    if (keyPressed == 13){
      this.onInputBlur(e);
    }
  }

  onRatingChange(value) {
    if (this.state.value === 1 && value === 1) {
      // set to zero if clicking on 1 when value is already 1
      this.setState({ value: 0 });
      this.props.onChangedCallback({label: this.state.label, value: 0, index: this.props.index});
    }
    else {
      this.setState({
        value
      });
      this.props.onChangedCallback({label: this.state.label, value: value, index: this.props.index});
    }
  }

  onRatingHover(value) {
    this.setState({hoveredValue: value});
  }

  activateInput() {
    this.setState({ isActive: !this.state.isActive });
  }

  /* istanbul ignore next */
  render() {
    return (
      <div className='labelInput'>
        {
          this.state.isActive
            ? <input className='textInput' onBlur={this.onInputBlur} type='text' maxLength='50' value={this.state.label} onChange={this.onInputChange} onKeyUp={this.onInputKeyUp} ref={this.textInput}/>
            : <p className='textValue' onClick={this.activateInput} ref={this.textView}>{this.props.displayLabel}</p>
        }
        <div className='spacing'></div>
        <span className='rating'><Rating initialRating={this.state.value} emptySymbol={emptyCircularStyle} fullSymbol={fullCircularStyle} placeholderSymbol={fullCircularStyle} onClick={this.onRatingChange} onHover={this.onRatingHover}/></span>
        <style jsx>{`
          .active {
            display: block;
            visibility: visible;
          }
          .labelInput {
            display: flex;
          }
          span {
            margin-right: 5px;
          }
          input {
            width: 204px;
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
          .rating {
            flex-grow: 0;
            flex-shrink: 0;
            min-width: 100px;
          }
          .spacing {
            flex-grow: 3;
            border-bottom: 1px solid black;
            margin: 0 0 2px 2px;
          }
          .dotted-input {
            display: flex;
            width: 250px;
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

DottedLabelInput.propTypes = {
  onChangedCallback: PropTypes.func.isRequired,
  initialValue: PropTypes.number.isRequired,
  displayLabel: PropTypes.string.isRequired,
  index: PropTypes.number
}

export default DottedLabelInput;
