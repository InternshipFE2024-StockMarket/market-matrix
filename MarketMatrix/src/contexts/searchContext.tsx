import React from 'react';
import {createContext, useState, useContext, ReactNode} from 'react';

interface SearchContextType {
  inputValue: string;
  setInputValue: (value: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({
  children,
}: SearchProviderProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <SearchContext.Provider value={{inputValue, setInputValue}}>
      {children}
    </SearchContext.Provider>
  );
};
