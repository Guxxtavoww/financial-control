import React from 'react';

import { FCWithChildren } from '@/types';

interface IComposeProviderProps {
  with: React.ElementType[];
}

const ComposeProvider: FCWithChildren<IComposeProviderProps, true> = ({
  children,
  with: Providers,
}) => (
  <>
    {Providers.reduce(
      (AccProviders, Provider) => (
        <Provider>{AccProviders}</Provider>
      ),
      children
    )}
  </>
);

export default ComposeProvider;
