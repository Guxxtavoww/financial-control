import React from 'react';

export interface IFinance {
  id: string | number;
}

export type WithChildren<T = {}> = T & { children: React.ReactNode };
