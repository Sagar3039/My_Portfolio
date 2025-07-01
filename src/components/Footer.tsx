import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform">
              SK<span className="text-foreground">.</span>
            </a>
            <p className="mt-2 text-foreground max-w-xs hover:text-primary transition-colors">
              Delivering elegant solutions through code, one project at a time.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary transition-colors hover:text-primary hover:rotate-6 hover:scale-110 transition-all social-icon-hover"
                aria-label="Github"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border social-icon-hover"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border social-icon-hover"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:contact@sagarkarmakar.dev"
                className="p-2 rounded-full border border-border social-icon-hover"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary hover:bg-primary/90 transition-colors hover:scale-110 hover:shadow-lg transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-foreground text-sm">
              © {currentYear} Sagar Karmakar. All rights reserved.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6 text-sm">
              {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="link-underline text-foreground"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
