
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme on component mount
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark" || 
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-foreground hover:bg-white/20 transition-colors hover:scale-110 hover:rotate-12 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {darkMode ? <Sun size={20} className="hover:text-yellow-300" /> : <Moon size={20} className="hover:text-blue-400" />}
    </button>
  );
};

export default ThemeToggle;
