import {createContext, useState, useContext, ReactNode} from 'react';
import {ThemeInterface, greenColors} from '../constants/Colors';

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextType {
  theme: ThemeInterface;
  setTheme: React.Dispatch<React.SetStateAction<ThemeInterface>>;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: greenColors,
  setTheme: () => {},
});

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeInterface>(greenColors);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
