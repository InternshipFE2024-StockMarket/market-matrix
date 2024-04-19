import {createContext, useState, useContext, ReactNode} from 'react';
import {ThemeInterface, greenColors} from '../constants/Colors';

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextType {
  theme: ThemeInterface;
  setTheme: React.Dispatch<React.SetStateAction<ThemeInterface>>;
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: greenColors,
  setTheme: () => {},
  isEnabled: false,
  setIsEnabled: () => {},
});

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeInterface>(greenColors);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{theme, setTheme, isEnabled, setIsEnabled}}>
      {children}
    </ThemeContext.Provider>
  );
};
