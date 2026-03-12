import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300 backdrop-blur-md",
          isScrolled
            ? "py-5 bg-background/80 shadow-md"
            : "py-5 bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between relative z-50">
          {/* Logo */}
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10 whitespace-nowrap ">
              <span className="text-glow"> HAMANA </span> Zineb
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex space-x-8 mr-40">
            {navItems.map((item, key) => (
              <a key={key} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2 lg:flex">
            

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="fixed top-4 right-5 lg:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div></div>
      </nav>

      {/* Mobile overlay menu - FIXED OUTSIDE CONTAINER */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-blur/95  backdrop-blur-md transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-2xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-glow/90 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
