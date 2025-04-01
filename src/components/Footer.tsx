import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, MessageSquareCode, Youtube, Globe } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5 hover:scale-110 transition-transform" />, href: "https://facebook.com", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5 hover:scale-110 transition-transform" />, href: "https://twitter.com", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5 hover:scale-110 transition-transform" />, href: "https://www.instagram.com/isolvix_/", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5 hover:scale-110 transition-transform" />, href: "https://www.linkedin.com/company/isolvix/", name: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5 hover:scale-110 transition-transform" />, href: "https://youtube.com", name: "YouTube" },
    // { icon: <Github className="w-5 h-5 hover:scale-110 transition-transform" />, href: "https://github.com", name: "GitHub" },
  ];

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Documentation", href: "#docs" },
        { name: "API Reference", href: "#api" },
        { name: "Status", href: "#status" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Enterprise", href: "#enterprise" },
        { name: "Small Business", href: "#small-business" },
        { name: "Developers", href: "#developers" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" }
      ]
    },
    // {
    //   title: "Legal",
    //   links: [
    //     { name: "Privacy", href: "#privacy" },
    //     { name: "Terms", href: "#terms" },
    //     { name: "Security", href: "#security" },
    //     { name: "Cookies", href: "#cookies" }
    //   ]
    // }
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-5">
              <div className="bg-primary rounded-lg p-2">
                <MessageSquareCode className="w-6 h-6 text-white" />
              </div>
              <img src="src/img/image.png" alt="WappEase Logo" className="h-8" />
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Revolutionizing WhatsApp automation with AI-powered solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white text-sm transition-colors hover:underline underline-offset-4"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">English (United States)</span>
            </div>
            <span className="text-gray-400 text-sm">© {new Date().getFullYear()} WappEase, Inc.</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-400">Powered by</span>
            <a
              href="https://insolvix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="src/img/iSolvix.png" 
                alt="iSolvix Logo" 
                className="h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}