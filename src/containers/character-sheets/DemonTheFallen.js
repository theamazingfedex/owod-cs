import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LabelInput from '../../components/common/LabelInput';
// import Name from '../../components/demon/Name';
import Player from '../../components/demon/Player';
import Chronicle from '../../components/demon/Chronicle';
import Demeanor from '../../components/demon/Demeanor';
import Nature from '../../components/demon/Nature';
import Concept from '../../components/demon/Concept';
import House from '../../components/demon/House';
import Faction from '../../components/demon/Faction';
import Visage from '../../components/demon/Visage';
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
          <div className='col col1'>
            <LabelInput displayLabel='Name' onChangedCallback={value => this.setState({character: {...this.state.character, name: value}})} initialValue={this.state.character.name}/>
            <LabelInput displayLabel='Player' onChangedCallback={value => this.setState({character: {...this.state.character, player: value}})} initialValue={this.state.character.player}/>
            <LabelInput displayLabel='Chronicle' onChangedCallback={value => this.setState({character: {...this.state.character, chronicle: value}})} initialValue={this.state.character.chronicle}/>
          </div>
          <div className='col col2'>
            <LabelInput displayLabel='Nature' onChangedCallback={value => this.setState({character: {...this.state.character, nature: value}})} initialValue={this.state.character.nature}/>
            <LabelInput displayLabel='Demeanor' onChangedCallback={value => this.setState({character: {...this.state.character, demeanor: value}})} initialValue={this.state.character.demeanor}/>
            <LabelInput displayLabel='Concept' onChangedCallback={value => this.setState({character: {...this.state.character, concept: value}})} initialValue={this.state.character.concept}/>
          </div>
          <div className='col col3'>
            <LabelInput displayLabel='House' onChangedCallback={value => this.setState({character: {...this.state.character, house: value}})} initialValue={this.state.character.house}/>
            <LabelInput displayLabel='Faction' onChangedCallback={value => this.setState({character: {...this.state.character, faction: value}})} initialValue={this.state.character.faction}/>
            <LabelInput displayLabel='Visage' onChangedCallback={value => this.setState({character: {...this.state.character, visage: value}})} initialValue={this.state.character.visage}/>
          </div>
        </div>
        <hr />
        <style jsx>{`
          hr {
            color: black;
            width: 100%;
            margin-top: 15px;
          }
          .col {
            display: flex;
            flex-direction: column;
            align-self: space-between;
          }
          h2 {
            align-self: center;
          }
          .basic-info {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
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