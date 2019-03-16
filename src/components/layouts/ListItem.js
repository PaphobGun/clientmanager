import React from 'react';

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

export default ListItem;
