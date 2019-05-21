import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Visage extends Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.textView = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.activateInput = this.activateInput.bind(this);
    this.state = { visage: '', isActive: false };
  }

  componentDidUpdate() {
    if (!!this.textInput.current) {
      this.textInput.current.focus();
    }
  }

  onChange(e) {
    this.setState({visage: e.target.value});
    this.props.onChangedCallback(e.target.value);
  }

  activateInput() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <div className='visage'>
        <span>Visage:</span>
        {
          this.state.isActive
            ? <input className='textInput' onBlur={() => this.setState({isActive: false})} type='text' maxLength='50' onChange={this.onChange} value={this.state.visage} ref={this.textInput}/>
            : <p className='textValue' onClick={this.activateInput} ref={this.textView}>{this.state.visage}</p>
        }
        <style jsx>{`
          .textValue {
          }
          .textInput {
          }
          .active {
            display: block;
            visibility: visible;
          }
          .visage {
            display: flex;
          }
          span {
            margin-right: 5px;
          }
          input {
            width: 200px;
            height: 24px;
            background: #EEE;
            padding: 1px 2px;
          }
          p {
            padding: 1px 2px;
            background: #CCC;
            height: 24px;
            width: 200px;
            margin-top: 0;
          }
        `}</style>
      </div>
    );
  }
}

Visage.propTypes = {
  onChangedCallback: PropTypes.func.isRequired
}

export default Visage;