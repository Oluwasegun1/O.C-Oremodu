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
  { name: "Research & Briefs", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpenPath, setMenuOpenPath] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileMenuOpen = menuOpenPath === pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const whatsappUrl = formatWhatsAppLink(
    LAWYER_DATA.contact.whatsappNumber,
    `Hello ${LAWYER_DATA.name}, I am reaching out via your website regarding a legal enquiry.`
  );

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B1F33]/96 backdrop-blur-md shadow-lg py-3 border-b border-[#B08D57]/25"
            : "bg-[#0B1F33] py-4 sm:py-5 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Identity / Monogram */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 border border-[#B08D57] flex items-center justify-center bg-[#071524] text-[#B08D57] font-serif-title text-base font-bold tracking-widest group-hover:bg-[#B08D57] group-hover:text-[#0B1F33] transition-colors duration-200">
              {LAWYER_DATA.initials}
            </div>
            <div>
              <span className="block font-serif-title text-base sm:text-xl font-semibold text-[#F7F5F0] tracking-wide group-hover:text-[#C5A069] transition-colors leading-tight">
                {LAWYER_DATA.shortName.toUpperCase()}
              </span>
              <span className="block text-[10px] sm:text-[11px] font-sans-body tracking-[0.16em] text-[#B08D57] uppercase mt-0.5">
                LL.B • B.L • AICMC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6 lg:gap-7">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs lg:text-[13px] font-sans-body tracking-wider transition-colors py-1.5 relative whitespace-nowrap ${
                    isActive
                      ? "text-[#C5A069] font-semibold"
                      : "text-white/80 hover:text-[#F7F5F0]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#B08D57] transition-transform duration-200 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on WhatsApp"
              className="flex items-center gap-1.5 text-xs text-[#E5E7EB]/85 hover:text-[#C5A069] transition-colors px-2 py-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-[#B08D57] text-[11px] uppercase tracking-[0.15em] font-semibold text-[#C5A069] bg-transparent hover:bg-[#B08D57] hover:text-[#0B1F33] transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpenPath(mobileMenuOpen ? null : pathname)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            className="md:hidden p-2 text-white/90 hover:text-[#B08D57] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#071524]/98 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8 overflow-y-auto">
          <div className="space-y-6 pt-2">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#B08D57] border-b border-white/10 pb-2.5 font-semibold">
              Navigation
            </div>
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-2xl font-serif-title tracking-wide transition-colors ${
                      isActive ? "text-[#C5A069] font-semibold" : "text-white/85 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-white/10 pt-6 space-y-4 mt-8">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/75">
              <span>{LAWYER_DATA.location}</span>
              <a
                href={`tel:${LAWYER_DATA.contact.phone}`}
                className="flex items-center gap-1.5 text-[#C5A069] font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                {LAWYER_DATA.contact.phoneDisplay}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
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
                Enquire
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
