import { createContext, useContext, useState } from 'react';

export const EntriesContext = createContext();

const EntriesProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  return (
    <EntriesContext.Provider value={{ entries, setEntries }}>
      {children}
    </EntriesContext.Provider>
  );
};

const useEntries = () => {
  const context = useContext(EntriesContext);

  if (context === undefined) {
    throw new Error('Entries must be used within provider');
  }
  return context;
};

export { EntriesProvider, useEntries };
