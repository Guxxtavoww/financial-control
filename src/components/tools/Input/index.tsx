import React, { useId, memo } from 'react';

import { IInputProps } from './types';
import { InputContainer, InputLabel } from './styles';

const Input: React.FC<IInputProps> = ({
  label,
  name,
  placeholder,
  ref,
  ...rest
}) => {
  const inputId = useId();

  const uniqueId = `${name}${inputId}`;

  return (
    <InputContainer>
      <InputLabel htmlFor={uniqueId}>{label}</InputLabel>
      <input
        name={name}
        id={uniqueId}
        ref={ref}
        placeholder={placeholder}
        {...rest}
      />
    </InputContainer>
  );
};

export default memo(Input);
