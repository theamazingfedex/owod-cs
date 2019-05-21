import React, { Component } from 'react';
import Select from 'react-select';
import DemonTheFallen from '../containers/character-sheets/DemonTheFallen';

const selectOptions = [
  { 'value': 1, 'label': 'Demon the Fallen', component: <DemonTheFallen/>},
  { 'value': 2, 'label': 'Mage the Ascension', component: <p>Mage</p>},
  { 'value': 3, 'label': 'Changeling' , component: <p>change</p>},
  { 'value': 4, 'label': 'Wraith' , component: <p>wraith</p>},
  { 'value': 5, 'label': 'Hunter: The Reckoning' , component: <p>Hunter</p>}
];

export default class SheetPicker extends Component {
  constructor(props) {
    super(props);

    this.onSelectChange = this.onSelectChange.bind(this);
    this.state = {selectedValue: selectOptions[0]};
  }
  onSelectChange(value) {
    if (value.length == 0) return;
    this.setState({selectedValue: value});
    console.log('selectedValue: ', value);
  }

  render() {
    return (
      <div className='sheet-picker'>
        <h1>World of Darkness Character Sheets</h1>
        <div className='sheet-picker-container'>
          <Select options={selectOptions} onChange={this.onSelectChange} labelField='name' value={this.state.selectedValue}/>
        </div>
        <hr />
        <div>{this.state.selectedValue.component}</div>
        <style jsx>{`
          h1 {
            align-self: center;
          }
          hr {
            color: black;
            width: 100%;
            margin-top: 15px;
          }
          .sheet-picker {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .sheet-picker-container {
            margin: 0 auto;
            user-select: none;
            width: 200px;
          }
        `}</style>
      </div>
    );
  }
}