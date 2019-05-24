import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LabelInput from '../../components/common/LabelInput';
import DottedInput from '../../components/common/DottedInput';
import DottedLabelInput from '../../components/common/DottedLabelInput';
import ClearLocalStorageButton from '../../components/common/ClearLocalStorageButton';
import { demonLocalStorageId } from '../../components/common/LocalStorageIds';

class DemonTheFallen extends Component {
  constructor(props) {
    super(props);

    this.loreChangedCallback = this.loreChangedCallback.bind(this);
    this.backgroundChangedCallback = this.backgroundChangedCallback.bind(this);
    this.state = this.props.seedState;
  }

  componentWillUpdate(props, state) {
    this.props.saveStateCallback(state);
  }

  loreChangedCallback(value) {
    let lores = this.state.advantages.lore.slice(0);
    if (value.label.length === 0) {
      lores.splice(value.index, 1);
    } else {
      lores[value.index] = {label: value.label, value: value.value};
    }
    this.setState({advantages: {...this.state.advantages, lore: lores}});
  }

  backgroundChangedCallback(value) {
    let backgrounds = this.state.advantages.backgrounds.slice(0);
    if (value.label.length === 0) {
      backgrounds.splice(value.index, 1);
    } else {
      backgrounds[value.index] = {label: value.label, value: value.value};
    }
    this.setState({advantages: {...this.state.advantages, backgrounds: backgrounds}});
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
        <h3>Abilities</h3>
        <div className='abilities'>
          <div className='col abili-col1'>
            <DottedInput displayLabel='Alertness' initialValue={ this.state.abilities.alertness } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, alertness: value}})}/>
            <DottedInput displayLabel='Athletics' initialValue={ this.state.abilities.athletics } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, athletics: value}})}/>
            <DottedInput displayLabel='Awareness' initialValue={ this.state.abilities.awareness } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, awareness: value}})}/>

            <DottedInput displayLabel='Brawl' initialValue={ this.state.abilities.brawl } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, brawl: value}})}/>
            <DottedInput displayLabel='Dodge' initialValue={ this.state.abilities.dodge } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, dodge: value}})}/>
            <DottedInput displayLabel='Empathy' initialValue={ this.state.abilities.empathy } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, empathy: value}})}/>

            <DottedInput displayLabel='Expression' initialValue={ this.state.abilities.expression } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, expression: value}})}/>
            <DottedInput displayLabel='Intimidation' initialValue={ this.state.abilities.intimidation } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, intimidation: value}})}/>
            <DottedInput displayLabel='Intuition' initialValue={ this.state.abilities.intuition } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, intuition: value}})}/>

            <DottedInput displayLabel='Leadership' initialValue={ this.state.abilities.leadership } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, leadership: value}})}/>
            <DottedInput displayLabel='Streetwise' initialValue={ this.state.abilities.streetwise } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, streetwise: value}})}/>
            <DottedInput displayLabel='Subterfuge' initialValue={ this.state.abilities.subterfuge } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, subterfuge: value}})}/>
          </div>
          <div className='col abili-col2'>
            <DottedInput displayLabel='Animal Ken' initialValue={ this.state.abilities.animalken } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, animalken: value}})}/>
            <DottedInput displayLabel='Crafts' initialValue={ this.state.abilities.crafts } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, crafts: value}})}/>
            <DottedInput displayLabel='Demolitions' initialValue={ this.state.abilities.demolitions } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, demolitions: value}})}/>

            <DottedInput displayLabel='Drive' initialValue={ this.state.abilities.drive } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, drive: value}})}/>
            <DottedInput displayLabel='Etiquette' initialValue={ this.state.abilities.etiquette } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, etiquette: value}})}/>
            <DottedInput displayLabel='Firearms' initialValue={ this.state.abilities.firearms } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, firearms: value}})}/>

            <DottedInput displayLabel='Melee' initialValue={ this.state.abilities.melee } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, melee: value}})}/>
            <DottedInput displayLabel='Performance' initialValue={ this.state.abilities.performance } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, performance: value}})}/>
            <DottedInput displayLabel='Security' initialValue={ this.state.abilities.security } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, security: value}})}/>

            <DottedInput displayLabel='Stealth' initialValue={ this.state.abilities.stealth } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, stealth: value}})}/>
            <DottedInput displayLabel='Survival' initialValue={ this.state.abilities.survival } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, survival: value}})}/>
            <DottedInput displayLabel='Technology' initialValue={ this.state.abilities.technology } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, technology: value}})}/>
          </div>
          <div className='col abili-col3'>
            <DottedInput displayLabel='Academics' initialValue={ this.state.abilities.charisma } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, academics: value}})}/>
            <DottedInput displayLabel='Computer' initialValue={ this.state.abilities.manipulation } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, computer: value}})}/>
            <DottedInput displayLabel='Finance' initialValue={ this.state.abilities.appearance } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, finance: value}})}/>

            <DottedInput displayLabel='Investigation' initialValue={ this.state.abilities.charisma } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, investigation: value}})}/>
            <DottedInput displayLabel='Law' initialValue={ this.state.abilities.manipulation } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, law: value}})}/>
            <DottedInput displayLabel='Linguistics' initialValue={ this.state.abilities.appearance } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, linguistics: value}})}/>

            <DottedInput displayLabel='Medicine' initialValue={ this.state.abilities.charisma } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, medicine: value}})}/>
            <DottedInput displayLabel='Occult' initialValue={ this.state.abilities.manipulation } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, occult: value}})}/>
            <DottedInput displayLabel='Politics' initialValue={ this.state.abilities.appearance } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, politics: value}})}/>

            <DottedInput displayLabel='Religion' initialValue={ this.state.abilities.charisma } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, religion: value}})}/>
            <DottedInput displayLabel='Research' initialValue={ this.state.abilities.manipulation } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, research: value}})}/>
            <DottedInput displayLabel='Science' initialValue={ this.state.abilities.appearance } onChangedCallback={value => this.setState({abilities: {...this.state.abilities, science: value}})}/>
          </div>
        </div>
        <hr />
        <h3>Advantages</h3>
        <div className='advantages'>
          <div className='col back-col1'>
            <h4>Backgrounds</h4>
            {
              this.state.advantages.backgrounds.map((background, idx) =>
                <DottedLabelInput key={idx} index={idx} displayLabel={background.label || ''} initialValue={background.value || 0} onChangedCallback={this.backgroundChangedCallback}/>
              )
            }
            <DottedLabelInput index={this.state.advantages.backgrounds.length} displayLabel='' initialValue={0} onChangedCallback={this.backgroundChangedCallback}/>
          </div>
          <div className='col lore-col2'>
            <h4>Lore</h4>
            {
              this.state.advantages.lore.map((lore, idx) => {
                return <DottedLabelInput key={idx} index={idx} displayLabel={lore.label || ''} initialValue={lore.value || 0} onChangedCallback={this.loreChangedCallback}/>
              })
            }
            <DottedLabelInput index={this.state.advantages.lore.length} displayLabel='' initialValue={0} onChangedCallback={this.loreChangedCallback}/>
          </div>
          <div className='col virt-col3'>
            <h4>Virtues</h4>
            <DottedInput displayLabel='Conscience' initialValue={ this.state.advantages.virtues.conscience } onChangedCallback={value => this.setState({advantages: {...this.state.advantages, virtues: {...this.state.advantages.virtues, conscience: value}}})}/>
            <DottedInput displayLabel='Conviction' initialValue={ this.state.advantages.virtues.conviction } onChangedCallback={value => this.setState({advantages: {...this.state.advantages, virtues: {...this.state.advantages.virtues, conviction: value}}})}/>
            <DottedInput displayLabel='Courage' initialValue={ this.state.advantages.virtues.courage } onChangedCallback={value => this.setState({advantages: {...this.state.advantages, virtues: {...this.state.advantages.virtues, courage: value}}})}/>
          </div>
        </div>
        <style jsx>{`
          hr {
            color: black;
            width: 100%;
            margin-top: 15px;
          }
          .attributes, .abilities, .advantages {
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
          h4 {
            margin-top: -10px;
          }
          h2, h3, h4 {
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
