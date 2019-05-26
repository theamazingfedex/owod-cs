const baseCircularStyle = {
  display: 'inline-block',
  borderRadius: '50%',
  border: '5px double white',
  width: 10,
  height: 10
};

export const emptyCircularStyle = {
  ...baseCircularStyle,
  backgroundColor: '#CCC'
};

export const fullCircularStyle = {
  ...baseCircularStyle,
  backgroundColor: 'black'
};

const baseSquareStyle = {
  display: 'inline-block',
  borderRadius: '0%',
  border: '5px double white',
  width: 10,
  height: 10
};

export const emptySquareStyle = {
  ...baseCircularStyle,
  backgroundColor: '#CCC'
};

export const fullSquareStyle = {
  ...baseCircularStyle,
  backgroundColor: 'black'
};
