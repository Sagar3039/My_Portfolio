
import { ArrowDown, Download, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentText, setCurrentText] = useState(0);
  const textOptions = ["Full Stack Developer", "Android Enthusiast"];
  const typingSpeed = 100; // milliseconds per character
  const eraseSpeed = 50; // milliseconds per character
  const delayBeforeErasing = 1500; // delay before erasing
  const delayBeforeTyping = 500; // delay before typing again

  useEffect(() => {
    let timeout: number;
    const fullText = textOptions[currentText];
    
    if (isTyping) {
      if (text !== fullText) {
        // Still typing
        timeout = window.setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, wait before erasing
        timeout = window.setTimeout(() => {
          setIsTyping(false);
        }, delayBeforeErasing);
      }
    } else {
      if (text) {
        // Erasing
        timeout = window.setTimeout(() => {
          setText(text.slice(0, text.length - 1));
        }, eraseSpeed);
      } else {
        // Finished erasing, switch to next text and start typing again
        timeout = window.setTimeout(() => {
          setCurrentText((prev) => (prev + 1) % textOptions.length);
          setIsTyping(true);
        }, delayBeforeTyping);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [text, isTyping, currentText, textOptions]);

  const handleDownloadCV = () => {
    const cvPath = '/My_resumeSagar.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'sagar-karmakar-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-theme-dark to-gray-900 dark:from-gray-900 dark:to-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/0 via-background/20 to-background"></div>
      </div>

      {/* Social Media Sidebar */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-50">
        <a
          href="https://github.com/Sagar3039"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/sagar-karmakar-46791b285/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/sagar__karmakar_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110"
        >
          <Instagram size={24} />
        </a>
      </div>

      {/* Main Content */}
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col items-start max-w-3xl">
          <h2 className="text-lg sm:text-xl md:text-2xl text-primary font-medium mb-4 animate-slide-in hover:text-accent transition-colors duration-300">
            Hello, I'm
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in hover:scale-[1.01] transition-transform duration-300">
            Sagar Karmakar
          </h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light mb-8 animate-slide-in-right">
            {text}<span className="inline-block w-1 h-[1em] bg-primary ml-1 animate-pulse"></span>
          </h3>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mb-10 animate-fade-in hover:text-gray-300 transition-colors duration-300">
            I create elegant, efficient, and user-focused applications that deliver exceptional digital experiences.
          </p>
          
          <button
            onClick={handleDownloadCV}
            className="btn-primary flex items-center gap-2 animate-scale-in button-hover-glow"
          >
            Download My CV
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center animate-bounce text-center pointer-events-none">
        <span className="text-gray-400 text-sm mb-1 hover:text-primary transition-colors">Scroll Down</span>
        <ArrowDown size={20} className="text-primary hover:scale-110 transition-transform" />
      </div>
    </section>
  );
};

export default HeroSection;
