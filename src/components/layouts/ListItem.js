import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ parentState, onChange, placeholder, name, type }) => {
  return (
    <input
      type={type}
      className="form-control form-control-sm"
      name={name}
      placeholder={placeholder}
      value={parentState}
      onChange={onChange}
      autoComplete="off"
    />
  );
};

ListItem.defaultProps = {
  type: 'text'
};

ListItem.propTypes = {
  parentState: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default ListItem;
