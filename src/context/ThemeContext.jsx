import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themes = [
    // Modern Tech Portfolio Theme
    { 
      name: "tech-purple",
      fontFamily: "font-['Inter']", // Modern, clean font for tech portfolios
      bgColor: "bg-gray-900",
      textColor: "text-gray-100",
      highlight: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400",
      button: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700",
      card: "bg-gray-800/90 backdrop-blur-sm border border-purple-500/20",
      navBg: "bg-gray-900/95 backdrop-blur-md",
      accent: "from-purple-500 to-blue-500",
      specialText: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400",
      codeFont: "font-['Fira_Code']" // Great for code snippets
    },
    
    // Professional Dark Theme
    { 
      name: "professional-dark",
      fontFamily: "font-['Roboto']", // Highly professional and readable
      bgColor: "bg-gradient-to-br from-gray-900 to-gray-800",
      textColor: "text-gray-100",
      highlight: "text-blue-400",
      button: "bg-blue-700 hover:bg-blue-600",
      card: "bg-gray-800/90 backdrop-blur-sm border border-blue-500/20",
      navBg: "bg-gray-900/95 backdrop-blur-md",
      accent: "from-blue-600 to-cyan-500",
      specialText: "text-blue-400",
      codeFont: "font-['JetBrains_Mono']"
    },
    
    // Minimalist Elegant Theme
    { 
      name: "minimalist",
      fontFamily: "font-['Helvetica']", // Classic minimalist font
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
      textColor: "text-gray-900",
      highlight: "text-gray-700",
      button: "bg-gray-800 text-white hover:bg-gray-700",
      card: "bg-white/90 backdrop-blur-sm border border-gray-200",
      navBg: "bg-white/95 backdrop-blur-md",
      accent: "from-gray-600 to-gray-800",
      specialText: "text-gray-800",
      codeFont: "font-['Courier_Prime']"
    },
    
    // Vibrant Creative Theme
    { 
      name: "creative",
      fontFamily: "font-['Poppins']", // Modern and creative
      bgColor: "bg-black",
      textColor: "text-white",
      highlight: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500",
      button: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      card: "bg-gray-900/90 border border-purple-500/30 backdrop-blur-sm",
      navBg: "bg-gray-900/95 backdrop-blur-md",
      accent: "from-purple-500 to-pink-500",
      specialText: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500",
      codeFont: "font-['Fira_Code']"
    },
    
    // Royal Professional Theme
    { 
      name: "royal",
      fontFamily: "font-['Georgia']", // Elegant and professional
      bgColor: "bg-gradient-to-br from-purple-900 to-indigo-900",
      textColor: "text-gray-100",
      highlight: "text-purple-300",
      button: "bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600",
      card: "bg-purple-900/50 backdrop-blur-sm border border-purple-400/30",
      navBg: "bg-purple-900/95 backdrop-blur-md",
      accent: "from-purple-600 to-indigo-600",
      specialText: "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300",
      codeFont: "font-['Source_Code_Pro']"
    }
  ];

  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  useEffect(() => {
    // Load saved theme or use system preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      const theme = themes.find(t => t.name === savedTheme);
      if (theme) setCurrentTheme(theme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setCurrentTheme(themes[0]); // Default to dark theme if system prefers dark
    }
  }, []);

  const switchTheme = (themeName) => {
    const newTheme = themes.find(t => t.name === themeName) || themes[0];
    setCurrentTheme(newTheme);
    localStorage.setItem('portfolio-theme', themeName);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, themes, switchTheme }}>
      <div className={`${currentTheme.bgColor} ${currentTheme.textColor} ${currentTheme.fontFamily} min-h-screen transition-colors duration-300`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);