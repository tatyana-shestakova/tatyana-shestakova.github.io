import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ModeType } from 'src/stories/Button/Button';

interface ThemeContextType {
  theme: ModeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ModeType>('orange');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'orange' ? 'mint' : 'orange'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
