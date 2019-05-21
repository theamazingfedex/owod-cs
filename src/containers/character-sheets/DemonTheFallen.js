import React, { Component } from 'react';
import initialState from '../../components/DemonInitialState';

import Name from '../../components/common/Name';
import Player from '../../components/common/Player';
import Chronicle from '../../components/common/Chronicle';
import Demeanor from '../../components/common/Demeanor';
import Nature from '../../components/common/Nature';
import Concept from '../../components/common/Concept';
import House from '../../components/common/House';
import Faction from '../../components/common/Faction';
import Visage from '../../components/common/Visage';

export default class DemonTheFallen extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }
  render() {
    return (
      <div className='character-sheet demon'>
        <h2>Demon the Fallen</h2>
        <div className='basic-info'>
          <div className='col col1'>
            <Name onChangedCallback={value => this.setState({name: value})}/>
            <Player onChangedCallback={value => this.setState({player: value})}/>
            <Chronicle onChangedCallback={value => this.setState({chronicle: value})}/>
          </div>
          <div className='col col2'>
            <Nature onChangedCallback={value => this.setState({nature: value})}/>
            <Demeanor onChangedCallback={value => this.setState({demeanor: value})}/>
            <Concept onChangedCallback={value => this.setState({concept: value})}/>
          </div>
          <div className='col col3'>
            <House onChangedCallback={value => this.setState({house: value})}/>
            <Faction onChangedCallback={value => this.setState({faction: value})}/>
            <Visage onChangedCallback={value => this.setState({visage: value})}/>
          </div>
          <p>{this.state.name}</p>
        </div>
        <style jsx>{`
          .col {
            display: flex;
            flex-direction: column;
          }
          h2 {
            align-self: center;
          }
          .basic-info {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: space-between;
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