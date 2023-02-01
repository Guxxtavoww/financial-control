import { FormHandles } from '@unform/core';

type fieldNameType<T> = keyof T;
type unformRef = React.RefObject<FormHandles>;

export const getFieldValue = <T>(
  ref: unformRef,
  fieldName: fieldNameType<T>
) => {
  return ref.current?.getFieldValue(fieldName.toString()) as string | boolean;
};

interface IParams<T> {
  fieldName: fieldNameType<T>;
  value: any;
  isError?: boolean;
}

export const setFieldValue = <T>(ref: unformRef, params: IParams<T>) => {
  const { fieldName, value, isError } = params;

  const field = fieldName.toString();

  if (isError) {
    ref.current?.setFieldError(field, value);

    return;
  }
  ref.current?.setFieldValue(field, value);
};

export const focusOnField = <T>(
  ref: unformRef,
  fieldName: fieldNameType<T>
) => {
  ref.current?.getFieldRef(fieldName.toString()).focus();
};
