"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/ui/container";

const links = [
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = links
        .map((link) => document.getElementById(link.id))
        .filter((section): section is HTMLElement => section !== null);

      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 180 && rect.bottom >= 180) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-black/75 shadow-[0_10px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
          : "border-b border-transparent bg-black/20 backdrop-blur-md"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}

        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group relative z-50 flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 font-black text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20">
            N
          </div>

          <span className="text-lg font-bold tracking-tight text-white">
            Navadeep
            <span className="text-cyan-400">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.03] p-1 md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <Link
                key={link.id}
                href={link.href}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-black"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-navbar-link"
                    className="absolute inset-0 rounded-full bg-cyan-400"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500 hover:text-black"
          >
            Let&apos;s Talk

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() =>
            setIsMobileMenuOpen((current) => !current)
          }
          aria-label={
            isMobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition hover:border-cyan-400/40 md:hidden"
        >
          {isMobileMenuOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </Container>

      {/* Mobile Navigation */}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl md:hidden"
          >
            <Container className="py-5">
              <nav className="flex flex-col gap-2">
                {links.map((link, index) => {
                  const isActive =
                    activeSection === link.id;

                  return (
                    <motion.div
                      key={link.id}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={`flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium transition ${
                          isActive
                            ? "bg-cyan-500/10 text-cyan-400"
                            : "text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                        }`}
                      >
                        {link.name}

                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                <Link
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="mt-3 flex items-center justify-center rounded-xl bg-cyan-500 px-5 py-4 font-semibold text-black transition hover:bg-cyan-400"
                >
                  Let&apos;s Talk
                </Link>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}