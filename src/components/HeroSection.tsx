import React from "react";
import { ArrowDown, Download, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const specialties = [
  "Full Stack Development",
  "Android Enthusiast",
  "UI/UX Design"
];

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
      className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden px-4 pb-16"
    >
      {/* Mobile Hero (black and white) */}
      <div className="w-full min-h-screen flex flex-col justify-between lg:hidden py-8">
        {/* Centered group: image + main content */}
        <div className="flex flex-col items-center justify-center flex-1">
          <img
            src="/pf.jpg"
            alt="Sagar Karmakar"
            className="w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 rounded-full object-cover grayscale border-4 border-red-500 dark:border-red-500 shadow-xl mb-4"
            style={{ objectPosition: "center top" }}
          />
          <h1 className="text-3xl xs:text-4xl font-extrabold uppercase text-black dark:text-white mb-2 tracking-wide">Sagar Karmakar</h1>
          <h2 className="text-lg xs:text-xl font-semibold uppercase text-black/80 dark:text-white/80 mb-4 tracking-wider">Full Stack Developer</h2>
          <div className="w-16 h-0.5 bg-red-200 dark:bg-red-800 rounded-full mb-4"></div>
          <span className="text-xs xs:text-sm font-medium uppercase text-black/70 dark:text-white/70 tracking-widest mb-4">
            Full Stack <span className="text-red-500">·</span> Android <span className="text-red-500">·</span> UI/UX
          </span>
          {/* Download Resume Button */}
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/My_resumeSagar.pdf';
              link.download = 'sagar-karmakar-cv.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="w-full max-w-xs py-3 mb-4 bg-black text-white dark:bg-white dark:text-black font-bold rounded-lg shadow text-center uppercase tracking-wider transition-all hover:border-4 border-red-500 dark:hover:border-4 border-red-500"
          >
            Download Resume
          </button>
        </div>
        {/* Bottom group: location, scroll */}
        <div className="flex flex-col items-center w-full">
          <div className="text-xs text-black/40 dark:text-white/40 font-light tracking-widest mb-4">Based in India</div>
          <div className="flex flex-col items-center mb-2">
            <span className="text-black/40 dark:text-white/40 text-xs mb-1">Scroll Down</span>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce text-red-500 dark:text-red-400" viewBox="0 0 24 24"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </div>
        </div>
      </div>
      {/* Desktop Hero (unchanged, hidden on mobile) */}
      <div className="hidden lg:flex w-full max-w-7xl mx-auto flex-row items-center justify-between relative z-10 min-h-[70vh] gap-0">
        {/* Left: Massive Typography */}
        <div className="w-2/3 flex flex-col items-start justify-center relative z-20 text-left">
          <h1 className="text-[6rem] xl:text-[7rem] font-extrabold uppercase leading-[1.05] text-black dark:text-white tracking-tight relative z-10">
            Sagar<br />Karmakar
          </h1>
          <div className="flex items-center gap-8 mt-2">
            <h2 className="text-[4rem] font-extrabold uppercase leading-tight text-black/80 dark:text-white/80 tracking-tight relative z-10">
              Full Stack Developer
            </h2>
            {/* Circular Download Resume Button (Desktop only) */}
            
          </div>
        </div>
        {/* Right: Profile Image */}
        <div className="w-auto flex flex-col items-center justify-center relative">
          <img
            src="/pf.jpg"
            alt="Sagar Karmakar"
            className="w-80 h-80 rounded-full object-cover grayscale border-4 border-black dark:border-gray-700 shadow-2xl"
            style={{ objectPosition: "center top" }}
          />
        </div>
      </div>
      {/* Desktop: bottom left/right corners */}
      <div className="hidden lg:block absolute left-8 bottom-8 text-black/60 dark:text-white/60 text-base font-light tracking-widest z-30">
        Based in India
      </div>
      <div className="hidden lg:block absolute right-8 bottom-8 text-right text-lg text-black/80 dark:text-white/80 font-medium z-30 flex flex-col items-end space-y-2">
        <ul className="space-y-2 mb-2">
          <li className="uppercase tracking-widest">/Full Stack Development</li>
          <li className="uppercase tracking-widest">/Android Enthusiast</li>
          <li>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/My_resumeSagar.pdf';
                link.download = 'sagar-karmakar-cv.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="flex items-center gap-2 justify-end w-full bg-transparent p-0 m-0 text-black dark:text-white uppercase tracking-widest font-medium hover:text-red-500 transition-colors"
              style={{ boxShadow: 'none', border: 'none', outline: 'none' }}
            >
              <span className="text-red-500 text-xl">→</span> Download Resume
            </button>
          </li>
        </ul>
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
    </section>
  );
};

export default HeroSection;

