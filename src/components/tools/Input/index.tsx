import React, { useId, useMemo, useRef } from 'react';
import { useField } from '@unform/core';

import { IInputProps } from '@/types';
import { InputContainer, InputLabel } from './styles';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

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
  const uniqueId = useMemo(() => `${name}${inputId}`, [name, inputId]);
  const { fieldName, registerField, clearError, defaultValue } = useField(name);

  const path = useMemo(
    () => (type === 'checkbox' || type === 'radio' ? 'checked' : 'value'),
    [type]
  );

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
