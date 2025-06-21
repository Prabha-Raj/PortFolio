import Navbar from "./Components/Navbar";
import HeroSec from "./Components/HeroSec";
import AboutSec from "./Components/AboutSec";
import ResumeSec from "./Components/ResumeSec";
import SkillsSec from "./Components/SkillsSec";
import HireMeSec from "./Components/HireMeSec";
import FAQsSec from "./Components/FAQsSec";
import ReviewSec from "./Components/ReviewSec";
import ContactSec from "./Components/ContactSec";
import Footer from "./Components/Footer";
import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import WhatIDoSec from "./Components/WhatIDoSec";

// Theme Switcher Component
const ThemeSwitcher = () => {
  const { currentTheme, themes, switchTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${currentTheme.button} text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2`}
        >
          <span>🎨</span>
          <span>Theme</span>
        </button>

        {isOpen && (
          <div className={`absolute top-12 right-0 ${currentTheme.card} rounded-xl p-4 shadow-2xl min-w-48`}>
            <h3 className={`${currentTheme.textColor} font-semibold mb-3`}>Choose Theme</h3>
            <div className="space-y-2">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => {
                    switchTheme(theme.name);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                    currentTheme.name === theme.name
                      ? `${currentTheme.button} text-white`
                      : `${currentTheme.textColor} hover:bg-gray-700/50`
                  }`}
                >
                  {theme.name.split('-').map(word =>
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <Navbar />
      <HeroSec />
      <AboutSec />
      <WhatIDoSec />
      <ResumeSec />
      <SkillsSec />
      <HireMeSec />
      <FAQsSec />
      <ReviewSec />
      <ContactSec />
      <Footer />
    </ThemeProvider>
  );
}