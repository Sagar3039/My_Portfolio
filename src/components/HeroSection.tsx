import React from "react";
import { ArrowDown, Download, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const specialties = [
  "Full Stack Development",
  "Android Enthusiast",
  "UI/UX Design"
];

const HeroSection = ({ setShowNavbar }: { setShowNavbar: (v: boolean) => void }) => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentText, setCurrentText] = useState(0);
  const textOptions = ["Full Stack Developer", "Android Enthusiast"];
  const typingSpeed = 100; // milliseconds per character
  const eraseSpeed = 50; // milliseconds per character
  const delayBeforeErasing = 1500; // delay before erasing
  const delayBeforeTyping = 500; // delay before typing again

  // Animation: show letters after a short blank delay
  const [showLetters, setShowLetters] = useState(false);
  const [showOtherElements, setShowOtherElements] = useState(false);
  const [showProfileImage, setShowProfileImage] = useState(false);

  // Calculate total animation time for all letters
  const name1 = "SAGAR";
  const name2 = "KARMAKAR";
  const title = "FULL STACK DEVELOPER";
  const letterStagger = 40; // ms
  const letterAnimDuration = 700; // ms
  const totalLetterAnim = (Math.max(name1.length, name2.length, title.length) - 1) * letterStagger + letterAnimDuration;
  const otherElementsDelay = 500; // ms after letters
  const profileImageDelay = 500; // ms after other elements
  const navbarDelay = 500; // ms after profile image

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLetters(true), 400);
    const timer2 = setTimeout(() => setShowOtherElements(true), 400 + totalLetterAnim + otherElementsDelay);
    const timer3 = setTimeout(() => setShowProfileImage(true), 400 + totalLetterAnim + otherElementsDelay + profileImageDelay);
    const timer4 = setTimeout(() => setShowNavbar(true), 400 + totalLetterAnim + otherElementsDelay + profileImageDelay + navbarDelay);
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); clearTimeout(timer4); };
  }, []);

  // Helper to split string into animated spans
  const animatedLetters = (str: string, baseKey: string = "", directions = ["left", "right", "up", "down"]) =>
    str.split("").map((char, i) => {
      if (char === " ") return <span key={baseKey + "-space-" + i} style={{ display: "inline-block", width: "0.5em" }} />;
      const dir = directions[i % directions.length];
      return (
        <span
          key={baseKey + "-" + i}
          className={
            showLetters
              ? `inline-block opacity-0 smooth-slide-in-${dir} letter-delay-${i}`
              : "inline-block opacity-0"
          }
          style={{ animationFillMode: "forwards" }}
        >
          {char}
        </span>
      );
    });

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
            className="w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 rounded-full object-cover grayscale border-4 border-red-500 dark:border-red-500 shadow-xl mb-4 animate-fling-scale animate-delay-800"
            style={{ objectPosition: "center top" }}
          />
          <h1 className="text-3xl xs:text-4xl font-extrabold uppercase text-black dark:text-white mb-2 tracking-wide animate-fling-in-left animate-delay-1100">Sagar Karmakar</h1>
          <h2 className="text-lg xs:text-xl font-semibold uppercase text-black/80 dark:text-white/80 mb-4 tracking-wider animate-fling-in-right animate-delay-1400">Full Stack Developer</h2>
          <div className="w-16 h-0.5 bg-red-200 dark:bg-red-800 rounded-full mb-4 animate-fling-in-top animate-delay-1700"></div>
          <span className="text-xs xs:text-sm font-medium uppercase text-black/70 dark:text-white/70 tracking-widest mb-4 animate-fling-in-bottom animate-delay-2000">
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
            className="w-full max-w-xs py-3 mb-4 bg-black text-white dark:bg-white dark:text-black font-bold rounded-lg shadow text-center uppercase tracking-wider transition-all hover:border-4 border-red-500 dark:hover:border-4 border-red-500 animate-fling-rotate animate-delay-2300"
          >
            Download Resume
          </button>
        </div>
        {/* Bottom group: location, scroll */}
        <div className="flex flex-col items-center w-full">
          <div className="text-xs text-black/40 dark:text-white/40 font-light tracking-widest mb-4 animate-fling-in-left animate-delay-2600">Based in India</div>
          <div className="flex flex-col items-center mb-2 animate-fling-in-right animate-delay-2900">
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
            {animatedLetters(name1, "name1", ["left", "right", "up", "down"])}
            <br />
            {animatedLetters(name2, "name2", ["right", "left", "down", "up"])}
          </h1>
          <div className="flex items-center gap-8 mt-2">
            <h2 className="text-[4rem] font-extrabold uppercase leading-tight text-black/80 dark:text-white/80 tracking-tight relative z-10">
              {animatedLetters(title, "title", ["up", "down", "left", "right"])}
            </h2>
          </div>
        </div>
        {/* Right: Profile Image */}
        <div className="w-auto flex flex-col items-center justify-center relative">
          <img
            src="/pf.jpg"
            alt="Sagar Karmakar"
            className={`w-80 h-80 rounded-full object-cover grayscale border-4 border-black dark:border-gray-700 shadow-2xl transition-opacity duration-300 ${showProfileImage ? 'pop-out letter-delay-2' : 'opacity-0'}`}
            style={{ objectPosition: "center top" }}
          />
        </div>
      </div>
      {/* Desktop: bottom left/right corners */}
      <div className={`hidden lg:block absolute left-8 bottom-8 text-black/60 dark:text-white/60 text-base font-light tracking-widest z-30 transition-opacity duration-300 ${showOtherElements ? 'smooth-slide-in-left letter-delay-4' : 'opacity-0'}`}>
        Based in India
      </div>
      <div className={`hidden lg:block absolute right-8 bottom-8 text-right text-lg text-black/80 dark:text-white/80 font-medium z-30 flex flex-col items-end space-y-2 transition-opacity duration-300 ${showOtherElements ? 'smooth-slide-in-right letter-delay-6' : 'opacity-0'}`}>
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

     
    </section>
  );
};

export default HeroSection;

