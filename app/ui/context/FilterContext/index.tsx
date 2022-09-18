import { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from 'react';
import { StatusType } from 'types';

interface FilterState {
  assigneeId: null | string;
  status: null | StatusType;
}

interface ContextState {
  filterState: FilterState;
  setFilterState: Dispatch<SetStateAction<FilterState>>;
}

const Context = createContext<ContextState>({
  filterState: {
    assigneeId: null,
    status: null,
  },
  setFilterState: (filterState: FilterState) => {},
});

export function FilterProvider({ children }) {
  const [filterState, setFilterState] = useState<FilterState>({
    assigneeId: null,
    status: null,
  });
  const value: ContextState = useMemo(() => ({ filterState, setFilterState }), [filterState]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useFilterContext() {
  return useContext(Context);
}
