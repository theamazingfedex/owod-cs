import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import SheetPicker from '../components/SheetPicker';

class RootContainer extends Component {
  render() {
    return (
      <div className='root'>
        <SheetPicker />
      </div>
    );
  }
}

export default hot(RootContainer);