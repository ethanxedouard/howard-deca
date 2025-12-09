import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800 bg-[#1A1A1A]">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Howard Collegiate DECA Chapter
            </h3>
            <p className="text-sm text-neutral-300 max-w-xs">
              Preparing emerging leaders and entrepreneurs in marketing, finance, hospitality, management, and entrepreneurship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-sm text-neutral-300 hover:text-[#003E65] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-neutral-300 hover:text-[#003E65] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/hu_deca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/howard-university-collegiate-deca-chapter-581463389/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              {/* Email */}
              <a
                href="mailto:howardu.deca@gmail.com"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 hover:bg-[#D44638] hover:text-white hover:border-[#D44638] transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-neutral-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-neutral-300">
              © {currentYear} Howard Collegiate DECA Chapter. All rights reserved.
            </p>
            <p className="text-xs text-neutral-400">
              Preparing emerging leaders and entrepreneurs in marketing, finance, hospitality, management, and entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
