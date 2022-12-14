import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function Input({ className, type, value, name, func }) {

  function handleOnChange({ target }) {
    const { value } = target;
    func(value.toLowerCase());
  }

  return (
    <input
      className={ className }
      value={ value }
      type={ type }
      name={ name }
      id={ name }
      onChange={ handleOnChange }
    />
  );
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Input;