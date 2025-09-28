"use client";

import Link from "next/link";
import { FiGithub, FiMail, FiInstagram, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com", icon: <FiGithub />, label: "GitHub" },
    { href: "https://instagram.com", icon: <FiInstagram />, label: "Instagram" },
    { href: "https://linkedin.com", icon: <FiLinkedin />, label: "LinkedIn" },
    { href: "https://twitter.com", icon: <FiTwitter />, label: "Twitter" },
    { href: "https://facebook.com", icon: <FiFacebook />, label: "Facebook" },
  ];

  const footerLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/faq", label: "FAQ" },
    { href: "/support", label: "Support" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">CreativePortfolio</h3>
            <p className="text-sm text-gray-500">
              Showcasing creativity and connecting artists with opportunities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary-600 transition"
                >
                  <span className="sr-only">{link.label}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-gray-500 hover:text-primary-600 transition">
                Home
              </Link>
              <Link href="/gallery" className="text-sm text-gray-500 hover:text-primary-600 transition">
                Gallery
              </Link>
              <Link href="/about" className="text-sm text-gray-500 hover:text-primary-600 transition">
                About
              </Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-primary-600 transition">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Resources</h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-primary-600 transition"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-2">
              Subscribe to our newsletter for the latest updates and creative inspiration.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-full"
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-3 py-2 rounded-r-md hover:bg-primary-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} CreativePortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;