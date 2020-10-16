import React from 'react';
import { InputTag } from './InputStyles';

const Input = ({ maxWidth, placeholder, type, id, name, marginBottom }) => {
  return (
    <InputTag
      maxWidth={maxWidth}
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
      marginBottom={marginBottom}
    />
  );
};

export default Input;
