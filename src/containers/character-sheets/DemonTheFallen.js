import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LabelInput from '../../components/common/LabelInput';
import DottedInput from '../../components/common/DottedInput';
import ClearLocalStorageButton from '../../components/common/ClearLocalStorageButton';
import { demonLocalStorageId } from '../../components/common/LocalStorageIds';

class DemonTheFallen extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.seedState;
  }

  componentWillUpdate(props, state) {
    this.props.saveStateCallback(state);
  }

  render() {
    return (
      <div className='character-sheet demon'>
        <h2>Demon the Fallen</h2>
        <ClearLocalStorageButton displayValue='Clear Character Sheet' localStorageId={demonLocalStorageId} />
        <div className='basic-info'>
          <div className='col basic-col1'>
            <LabelInput displayLabel='Name' onChangedCallback={value => this.setState({character: {...this.state.character, name: value}})} initialValue={this.state.character.name}/>
            <LabelInput displayLabel='Player' onChangedCallback={value => this.setState({character: {...this.state.character, player: value}})} initialValue={this.state.character.player}/>
            <LabelInput displayLabel='Chronicle' onChangedCallback={value => this.setState({character: {...this.state.character, chronicle: value}})} initialValue={this.state.character.chronicle}/>
          </div>
          <div className='col basic-col2'>
            <LabelInput displayLabel='Nature' onChangedCallback={value => this.setState({character: {...this.state.character, nature: value}})} initialValue={this.state.character.nature}/>
            <LabelInput displayLabel='Demeanor' onChangedCallback={value => this.setState({character: {...this.state.character, demeanor: value}})} initialValue={this.state.character.demeanor}/>
            <LabelInput displayLabel='Concept' onChangedCallback={value => this.setState({character: {...this.state.character, concept: value}})} initialValue={this.state.character.concept}/>
          </div>
          <div className='col basic-col3'>
            <LabelInput displayLabel='House' onChangedCallback={value => this.setState({character: {...this.state.character, house: value}})} initialValue={this.state.character.house}/>
            <LabelInput displayLabel='Faction' onChangedCallback={value => this.setState({character: {...this.state.character, faction: value}})} initialValue={this.state.character.faction}/>
            <LabelInput displayLabel='Visage' onChangedCallback={value => this.setState({character: {...this.state.character, visage: value}})} initialValue={this.state.character.visage}/>
          </div>
        </div>
        <hr />
        <h3>Attributes</h3>
        <div className='attributes'>
          <div className='col attr-col1'>
            <DottedInput displayLabel='Strength' initialValue={ this.state.attributes.strength } onChangedCallback={value => this.setState({attributes: {...this.state.attributes, strength: value}})}/>
            <DottedInput displayLabel='Dexterity' initialValue={ this.state.attributes.dexterity } onChangedCallback={value => this.setState({attributes: {...this.state.attributes, dexterity: value}})}/>
            <DottedInput displayLabel='Stamina' initialValue={ this.state.attributes.stamina } onChangedCallback={value => this.setState({attributes: {...this.state.attributes, stamina: value}})}/>
          </div>
          <div className='col attr-col2'>
            <DottedInput displayLabel='Charisma' initialValue={ this.state.attributes.charisma } onChangedCallback={value => this.setState({attributes: {...this.state.attributes, charisma: value}})}/>
            <DottedInput displayLabel='Manipulation' initialValue={ this.state.attributes.manipulation } onChangedCallback={value => this.setState({attributes: {...this.state.attributes, manipulation: value}})}/>
            <DottedInput displayLabel='Appearance' initialValue={ this.state.attributes.appearance } onChangedCallback={value => this.setState({attributes: {...this.state.attributes, appearance: value}})}/>
          </div>
          <div className='col attr-col3'>
            <DottedInput displayLabel='Perception' initialValue={ this.state.attributes.perception } onChangedCallback={value => this.setState({attributes: {...this.state.attributes, perception: value}})}/>
            <DottedInput displayLabel='Intelligence' initialValue={ this.state.attributes.intelligence } onChangedCallback={value => this.setState({attributes: {...this.state.attributes, intelligence: value}})}/>
            <DottedInput displayLabel='Wits' initialValue={ this.state.attributes.wits } onChangedCallback={value => this.setState({attributes: {...this.state.attributes, wits: value}})}/>
          </div>
        </div>
        <hr />
        <style jsx>{`
          hr {
            color: black;
            width: 100%;
            margin-top: 15px;
          }
          .attributes {
            display: flex;
            justify-content: space-around;
            width: 80%;
            align-self: center;
          }
          .col {
            display: flex;
            flex-direction: column;
            align-self: space-between;
            align-items: flex-end;
          }
          h2, h3 {
            align-self: center;
          }
          .basic-info {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 80%;
            align-self: center;
          }
          .character-sheet {
            display: flex;
            flex-direction: column;
          }
        `}</style>
      </div>
    );
  }
}

DemonTheFallen.propTypes = {
  seedState: PropTypes.object.isRequired,
  saveStateCallback: PropTypes.func.isRequired
}
export default DemonTheFallen;