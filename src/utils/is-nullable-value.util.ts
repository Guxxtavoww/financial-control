export function isNullableValue<T>(value: T): value is T & (null | undefined) {
  return value === null || value === undefined;
}
