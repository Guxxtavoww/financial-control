import _React from 'react';

import { FCWithChildren } from '../types';
import { MobileProvider } from './Mobile';

const Contexts: FCWithChildren<{}, true> = ({ children }) => (
  <MobileProvider>
    {children}
  </MobileProvider>  
);

export default Contexts;
