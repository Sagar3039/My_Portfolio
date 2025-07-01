import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const directions = ["left", "right", "up", "down"];

function animatedNavLabel(label: string, baseKey: string, show: boolean) {
  return label.split("").map((char, i) => {
    if (char === " ") return <span key={baseKey + "-space-" + i} style={{ display: "inline-block", width: "0.5em" }} />;
    const dir = directions[i % directions.length];
    return (
      <span
        key={baseKey + "-" + i}
        className={
          show
            ? `inline-block opacity-0 smooth-slide-in-${dir} letter-delay-${i}`
            : "inline-block opacity-0"
        }
        style={{ animationFillMode: "forwards" }}
      >
        {char}
      </span>
    );
  });
}

const Navbar = ({ show }: { show: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
  ];

  // Add scroll handling for navigation
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80, // Adjust for navbar height
        behavior: "smooth"
      });
      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  if (!show) return null;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 fade-in-down ${
        scrolled
          ? "bg-white/20 dark:bg-black/20 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-xl md:text-2xl text-red-500 hover:scale-105 ">
              SK
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => handleClick(e, item.href)}
                className={`nav-link-hover font-medium`}
                style={{ animationFillMode: "forwards" }}
              >
                {animatedNavLabel(item.name, item.name, show)}
              </a>
            ))}
            <ThemeToggle />
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded-md hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 glass-card mx-4 mt-2 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => handleClick(e, item.href)}
                className="block px-3 py-2 text-foreground hover:text-primary font-medium transition-colors hover:bg-white/10 rounded-md"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
