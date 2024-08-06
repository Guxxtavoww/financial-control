'use client';

import { useLayoutEffect, useState } from 'react';

import { useMediaQuery } from './use-media-query.hook';

type Breakpoints = {
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  active: 'SSR' | 'xs' | 'sm' | 'md' | 'lg';
};

export function useBreakpoints(): Breakpoints {
  const [isClient, setIsClient] = useState<boolean>(false);

  const breakpoints: Breakpoints = {
    isXs: useMediaQuery('(max-width: 640px)'),
    isSm: useMediaQuery('(min-width: 641px) and (max-width: 768px)'),
    isMd: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
    isLg: useMediaQuery('(min-width: 1025px)'),
    active: 'SSR',
  };

  useLayoutEffect(() => {
    setIsClient(typeof window !== 'undefined');
  }, []);

  if (isClient && breakpoints.isXs) breakpoints.active = 'xs';
  if (isClient && breakpoints.isSm) breakpoints.active = 'sm';
  if (isClient && breakpoints.isMd) breakpoints.active = 'md';
  if (isClient && breakpoints.isLg) breakpoints.active = 'lg';

  return breakpoints;
}
