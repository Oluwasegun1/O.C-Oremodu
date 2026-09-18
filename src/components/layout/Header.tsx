"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LAWYER_DATA } from "@/data/lawyer";
import { Menu, X, Phone, MessageSquare, ArrowUpRight } from "lucide-react";
import { formatWhatsAppLink } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Experience", href: "/experience" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const whatsappUrl = formatWhatsAppLink(
    LAWYER_DATA.contact.whatsappNumber,
    "Hello Barrister Adebayo, I would like to make an enquiry regarding a legal consultation."
  );

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B1F33]/95 backdrop-blur-md shadow-md py-3 border-b border-[#B08D57]/20"
            : "bg-[#0B1F33] py-5 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity / Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 border border-[#B08D57] flex items-center justify-center bg-[#071524] text-[#B08D57] font-serif-title text-xl font-bold tracking-wider group-hover:bg-[#B08D57] group-hover:text-[#0B1F33] transition-colors">
              {LAWYER_DATA.initials}
            </div>
            <div>
              <span className="block font-serif-title text-lg sm:text-xl font-semibold text-[#F7F5F0] tracking-wide group-hover:text-[#B08D57] transition-colors">
                {LAWYER_DATA.name.toUpperCase()}
              </span>
              <span className="block text-[10px] sm:text-[11px] font-sans-body tracking-widest text-[#B08D57] uppercase">
                Barrister & Solicitor
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-sans-body tracking-wider transition-colors py-1 relative ${
                    isActive
                      ? "text-[#B08D57] font-semibold"
                      : "text-white/80 hover:text-[#F7F5F0]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B08D57]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center gap-1.5 text-xs text-[#E5E7EB] hover:text-[#B08D57] transition-colors px-2 py-1"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-[#B08D57] text-xs uppercase tracking-widest font-semibold text-[#B08D57] bg-transparent hover:bg-[#B08D57] hover:text-[#0B1F33] transition-all duration-200"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            className="md:hidden p-2 text-white/90 hover:text-[#B08D57] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#071524]/98 backdrop-blur-xl md:hidden pt-20 px-6 flex flex-col justify-between pb-8">
          <div className="space-y-6 pt-4">
            <div className="text-xs uppercase tracking-widest text-[#B08D57] border-b border-white/10 pb-2">
              Navigation
            </div>
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xl font-serif-title tracking-wide transition-colors ${
                      isActive ? "text-[#B08D57] font-bold" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-white/10 pt-6 space-y-4">
            <div className="flex items-center justify-between text-xs text-white/70">
              <span>{LAWYER_DATA.location}</span>
              <a href={`tel:${LAWYER_DATA.contact.phone}`} className="flex items-center gap-1 text-[#B08D57]">
                <Phone className="w-3.5 h-3.5" />
                {LAWYER_DATA.contact.phoneDisplay}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white hover:border-[#B08D57]"
              >
                <MessageSquare className="w-4 h-4 text-[#B08D57]" />
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-1.5 py-3 px-4 bg-[#B08D57] text-[#0B1F33] text-xs font-semibold uppercase tracking-wider hover:bg-[#C5A069]"
              >
                Consultation
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
