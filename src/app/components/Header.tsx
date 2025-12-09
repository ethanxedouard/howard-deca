"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const closeDropdown = () => setOpenDropdown(null);

  const menuItems = [
    {
      label: "Learn About DECA",
      key: "learn",
      links: [
        { label: "Membership", href: "/membership" },
        { label: "Competitions", href: "/competitions" },
        { label: "How to Apply", href: "/how-to-apply" },
      ],
    },
    { label: "Meet Our Leaders", href: "/leadership" },
    { label: "Partner With Us", href: "/sponsorship" },
    {
      label: "Media",
      key: "media",
      links: [
        { label: "Photo Gallery", href: "/media" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left side - Logos */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/deca-logo.png"
              alt="DECA Logo"
              width={50}
              height={50}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </Link>
          <div className="h-10 w-px bg-zinc-300" />
          <Link href="/" className="flex items-center">
            <Image
              src="/images/howard-logo.png"
              alt="Howard Logo"
              width={50}
              height={50}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </Link>
        </div>

        {/* Right side - Navigation */}
        <nav className="flex items-center gap-6">
          {menuItems.map((item) =>
            item.links ? (
              <div key={item.key} className="relative">
                <button
                  onClick={() => toggleDropdown(item.key)}
                  className="flex items-center gap-1 text-sm font-medium text-[#1A1A1A] hover:text-[#005399] transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === item.key ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {openDropdown === item.key && (
                  <div className="absolute left-0 top-full mt-2 w-48 rounded-lg border border-zinc-200 bg-white py-2 shadow-lg">
                    {item.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeDropdown}
                        className="block px-4 py-2 text-sm font-medium text-[#1A1A1A] hover:bg-zinc-50 hover:text-[#005399]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-[#1A1A1A] hover:text-[#005399]"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#005399] transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
