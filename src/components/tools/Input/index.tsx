import React, { useId, useRef } from 'react';
import { useField } from '@unform/core';

import { IInputProps } from '@/types';
import { useIsomorphicLayoutEffect } from '@/hooks';

import { InputContainer, InputLabel } from './styles';

const Input: React.FC<IInputProps> = ({
  label,
  name,
  placeholder,
  isRow,
  type,
  ...rest
}) => {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, clearError, defaultValue } = useField(name);
  
  const uniqueId = `${name}${inputId}`;
  const path = type === 'checkbox' || type === 'radio' ? 'checked' : 'value';

  useIsomorphicLayoutEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path,
      setValue: (ref, value) => {
        ref.value = value;
        clearError();
      },
    });
  }, [fieldName, registerField, clearError, path]);

  return (
    <InputContainer isRow={!!isRow}>
      <InputLabel htmlFor={uniqueId}>{label}</InputLabel>
      <input
        name={name}
        id={uniqueId}
        ref={inputRef}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type}
        {...rest}
      />
    </InputContainer>
  );
};

export default Input;
