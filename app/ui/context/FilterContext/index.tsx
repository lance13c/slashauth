import { StatusType } from '@lib/schemes/ticket';
import { createContext, useContext, useState } from 'react';

interface ContextState {
  assigneeId: null | string;
  status: null | StatusType;
}

const Context = createContext({});

export function FilterProvider({ children }) {
  const [contextState, setContextState] = useState<ContextState>({
    assigneeId: null,
    status: null,
  });

  return <Context.Provider value={[contextState, setContextState]}>{children}</Context.Provider>;
}

export function useFilterContext() {
  return useContext(Context);
}
