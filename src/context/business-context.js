import { createContext } from "react";

export const BusinessContext = createContext({
  businessContextId: 0,
  setBusinessContextId: () => {},
  businessContexts: [],
  setBusinessContexts: () => {},
});
