import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelInput extends Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.textView = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.activateInput = this.activateInput.bind(this);
    this.state = { value: this.props.initialValue, isActive: false };
  }

  componentDidUpdate() {
    if (!!this.textInput.current) {
      this.textInput.current.focus();
    }
  }

  onChange(e) {
    this.setState({value: e.target.value});
    this.props.onChangedCallback(e.target.value);
  }

  activateInput() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <div className='labelInput'>
        <span>{this.props.displayLabel}:</span>
        {
          this.state.isActive
            ? <input className='textInput' onBlur={() => this.setState({isActive: false})} type='text' maxLength='50' onChange={this.onChange} value={this.state.value} ref={this.textInput}/>
            : <p className='textValue' onClick={this.activateInput} ref={this.textView}>{this.state.value}</p>
        }
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
          * {
            font-family: 'DEMON_SKER';
            font-size: 24px;
          }
        `}</style>
      </div>
    );
  }
}

LabelInput.propTypes = {
  onChangedCallback: PropTypes.func.isRequired,
  initialValue: PropTypes.string.isRequired,
  displayLabel: PropTypes.string.isRequired
}

export default LabelInput;