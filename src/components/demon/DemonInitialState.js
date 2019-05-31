const demonInitialState = {
  character: {
    name: '',
    player: '',
    chronicle: '',
    nature: '',
    demeanor: '',
    concept: '',
    house: '',
    faction: '',
    visage: ''
  },
  attributes: {
    strength: 1,
    dexterity: 1,
    stamina: 1,
    charisma: 1,
    manipulation: 1,
    appearance: 1,
    perception: 1,
    intelligence: 1,
    wits: 1
  },
  abilities: {
    alertness: 0,
    athletics: 0,
    awareness: 0,
    brawl: 0,
    dodge: 0,
    empathy: 0,
    expression: 0,
    intimidation: 0,
    intuition: 0,
    leadership: 0,
    streetwise: 0,
    subterfuge: 0,
    animalken: 0,
    crafts: 0,
    demolitions: 0,
    drive: 0,
    etiquette: 0,
    firearms: 0,
    melee: 0,
    performance: 0,
    security: 0,
    stealth: 0,
    survival: 0,
    technology: 0,
    academics: 0,
    computer: 0,
    finance: 0,
    investigation: 0,
    law: 0,
    linguistics: 0,
    medicine: 0,
    occult: 0,
    politics: 0,
    religion: 0,
    research: 0,
    science: 0
  },
  advantages: {
    backgrounds: [{label: 'something', value: 1}],
    lore: [{label: 'something else', value: 1}],
    virtues: {
      conscience: 1,
      conviction: 1,
      courage: 1
    }
  },
  merits: [
    { name: 'Great Liar', cost: 2 },
    { name: 'Revoked License', cost: -2 }
  ],
  derangements: [],
  otherTraits: [{ name: 'someTrait', value: 1 }],
  apocalypticForm: ['1', '2', '3'],
  faith: {
    permanent: 3,
    temporary: 3
  },
  torment: {
    permanent: 4,
    temporary: 1
  },
  willpower: {
    permanent: 5,
    temporary: 5
  },
  health: -1,
  experience: 0,
  inventory: []
}
export default demonInitialState;