'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const ThemeContext = createContext<{
  theme: string;
  setTheme: (theme: string) => void;
} | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState('light');

  const setTheme = (newTheme: string) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setThemeState(savedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </NextThemesProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};