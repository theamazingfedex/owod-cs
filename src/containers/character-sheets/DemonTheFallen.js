import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Name from '../../components/demon/Name';
import Player from '../../components/demon/Player';
import Chronicle from '../../components/demon/Chronicle';
import Demeanor from '../../components/demon/Demeanor';
import Nature from '../../components/demon/Nature';
import Concept from '../../components/demon/Concept';
import House from '../../components/demon/House';
import Faction from '../../components/demon/Faction';
import Visage from '../../components/demon/Visage';

class DemonTheFallen extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.seedState;
  }
  componentWillUpdate(state, nextState) {
    this.props.saveStateCallback(nextState);
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
  saveStateCallback: PropTypes.func.isRequired,
}
export default DemonTheFallen;