// ThemeContext.js
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themes = [
    // Professional Themes
    { 
      name: "midnight", 
      bgColor: "bg-gradient-to-br from-gray-900 to-blue-900",
      textColor: "text-gray-100",
      highlight: "text-blue-300",
      button: "bg-blue-700 hover:bg-blue-600",
      card: "bg-gray-800/80 backdrop-blur-sm",
      navBg: "bg-gray-900/90"
    },
    { 
      name: "sunset", 
      bgColor: "bg-gradient-to-br from-orange-500 to-pink-600",
      textColor: "text-white",
      highlight: "text-yellow-200",
      button: "bg-orange-600 hover:bg-orange-500",
      card: "bg-orange-500/20 backdrop-blur-sm",
      navBg: "bg-orange-600/90"
    },
    
    // Minimalist Themes
    { 
      name: "light", 
      bgColor: "bg-gradient-to-br from-gray-50 to-white",
      textColor: "text-gray-800",
      highlight: "text-blue-600",
      button: "bg-gray-800 text-white hover:bg-gray-700",
      card: "bg-white/80 backdrop-blur-sm border border-gray-200",
      navBg: "bg-white/90"
    },
    { 
      name: "dark", 
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      textColor: "text-gray-100",
      highlight: "text-blue-400",
      button: "bg-blue-600 hover:bg-blue-500",
      card: "bg-gray-700/80 backdrop-blur-sm",
      navBg: "bg-gray-900/90"
    },
    
    // Vibrant Themes
    { 
      name: "ocean", 
      bgColor: "bg-gradient-to-br from-cyan-600 to-blue-700",
      textColor: "text-white",
      highlight: "text-cyan-200",
      button: "bg-cyan-500 hover:bg-cyan-400",
      card: "bg-cyan-600/20 backdrop-blur-sm",
      navBg: "bg-cyan-700/90"
    },
    { 
      name: "forest", 
      bgColor: "bg-gradient-to-br from-emerald-600 to-green-700",
      textColor: "text-white",
      highlight: "text-emerald-200",
      button: "bg-emerald-500 hover:bg-emerald-400",
      card: "bg-emerald-600/20 backdrop-blur-sm",
      navBg: "bg-emerald-700/90"
    },
    
    // Special Themes
    { 
      name: "neon", 
      bgColor: "bg-black",
      textColor: "text-gray-100",
      highlight: "text-pink-400",
      button: "bg-pink-600 hover:bg-pink-500",
      card: "bg-gray-900/80 border border-pink-500/30 backdrop-blur-sm",
      navBg: "bg-gray-900/90"
    },
    { 
      name: "royal", 
      bgColor: "bg-gradient-to-br from-purple-900 to-indigo-900",
      textColor: "text-gray-100",
      highlight: "text-purple-300",
      button: "bg-purple-700 hover:bg-purple-600",
      card: "bg-purple-900/50 backdrop-blur-sm",
      navBg: "bg-purple-900/90"
    }
  ];
  
  const [currentTheme, setCurrentTheme] = useState(themes[0]);
  
  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      setCurrentTheme, 
      themes,
      switchTheme: (themeName) => {
        const newTheme = themes.find(t => t.name === themeName) || themes[0];
        setCurrentTheme(newTheme);
      }
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);