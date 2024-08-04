'use client';

import { useId } from 'react';

export function useFieldId(field_name: string): string {
  const randomId = useId();

  return field_name.concat(randomId);
}
