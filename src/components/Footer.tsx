import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, MessageSquareCode, Youtube } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com" },
  ];

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Documentation", "API Reference"]
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"]
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "Cookies"]
    }
  ];

  return (
    <footer className="bg-background border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MessageSquareCode className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold gradient-text">WappEase</span>
            </div>
            <p className="text-white/70 mb-4">
              Revolutionizing WhatsApp automation with AI-powered solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © 2025 WappEase. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-white/70 text-sm">
              <span>Powered by</span>
              <a
                href="https://insolvix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-text font-semibold hover:opacity-80 transition-opacity"
              >
                Insolvix
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}