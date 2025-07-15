import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to dark mode
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    // If no saved preference, use dark mode by default
    if (saved === null) {
      setDarkMode(true);
    } else {
      setDarkMode(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
      // Add enhanced dark mode styles
      document.documentElement.style.setProperty('--primary-glow', 'rgba(139, 92, 246, 0.35)');
      document.documentElement.style.setProperty('--secondary-glow', 'rgba(236, 72, 153, 0.35)');
    } else {
      document.documentElement.classList.remove('dark');
      // Reset glow variables
      document.documentElement.style.removeProperty('--primary-glow');
      document.documentElement.style.removeProperty('--secondary-glow');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};