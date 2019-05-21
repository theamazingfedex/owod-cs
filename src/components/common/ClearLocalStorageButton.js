import React from 'react';
import PropTypes from 'prop-types';

const clearLocalStorageButtonClicked = (props) => {
  return () => {
    if (confirm(`Are you sure you want to delete this character?
      * This action cannot be un-done *`)) {
      localStorage.removeItem(props.localStorageId);
      location.reload();
    }
  };
};
const ClearLocalStorageButton = (props) =>
<div className='button'>
  <button onClick={clearLocalStorageButtonClicked(props)}>{props.displayValue}</button>
  <style jsx>{`
    button {
      display: flex;
      margin: 0 auto;
      margin-top: -10px;
      margin-bottom: 20px;
    }
    ${props.additionalStyles}
  `}</style>
</div>

ClearLocalStorageButton.propTypes = {
  localStorageId: PropTypes.string.isRequired,
  displayValue: PropTypes.string.isRequired,
  additionalStyles: PropTypes.string
}

export default ClearLocalStorageButton;