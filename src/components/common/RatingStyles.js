const baseCircularStyle = {
  display: 'inline-block',
  borderRadius: '48%',
  border: '4px double #fff',
  width: 12,
  height: 14,
  marginRight: 1
};

export const emptyCircularStyle = {
  ...baseCircularStyle,
  backgroundColor: '#ccc'
};

export const fullCircularStyle = {
  ...baseCircularStyle,
  backgroundColor: '#555',
};

const baseSquareStyle = {
  display: 'inline-block',
  borderRadius: '0%',
  border: '4px double #fff',
  width: 12,
  height: 12,
  marginRight: 1
};

export const emptySquareStyle = {
  ...baseSquareStyle,
  backgroundColor: '#CCC'
};

export const fullSquareStyle = {
  ...baseSquareStyle,
  backgroundColor: '#555'
};
