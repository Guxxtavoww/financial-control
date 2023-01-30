import React from "react";

import { WithChildren } from "../types";
import { MobileProvider } from "./Mobile";

const Contexts: React.FC<WithChildren> = ({ children }) => (
  <MobileProvider>
    {children}
  </MobileProvider>  
);

export default Contexts;
