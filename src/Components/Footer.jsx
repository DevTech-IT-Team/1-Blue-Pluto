import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUp, ArrowRight, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white relative overflow-hidden border-t border-white/5">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 group cursor-default">
              <span className="text-3xl font-black tracking-tighter">
                1 <span className="text-[#D4AF37]">BLUE</span> PLUTO
              </span>
            </div>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm font-light">
              Architecting <strong className="text-white font-medium">Powerful Evolution</strong> through elite fiduciary consulting and innovative brand strategy. Grounded in trust, defined by results.
            </p>
            <div className="flex items-center gap-4 text-[#D4AF37]">
              <ShieldCheck size={20} className="opacity-50" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Fiduciary Excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="group flex items-center text-gray-500 hover:text-white transition-all duration-300 text-sm font-medium"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#D4AF37]" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-8">Direct Inquiries</h4>
            <div className="space-y-6 md:text-right">
              <a 
                href="mailto:lauramarie@1bluepluto.com" 
                className="inline-flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-[#D4AF37]/50 transition-all group"
              >
                <div className="text-right">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Laura Marie</p>
                  <p className="text-white font-bold">lauramarie@1bluepluto.com</p>
                </div>
                <div className="w-10 h-10 bg-[#003366] rounded-xl flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
              </a>

              <div className="pt-4 flex justify-start md:justify-end">
                <motion.button 
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={scrollToTop}
                  className="p-4 bg-[#111111] border border-white/10 rounded-2xl hover:border-[#D4AF37] transition-all group shadow-xl"
                  aria-label="Scroll to top"
                >
                  <ArrowUp size={24} className="text-[#D4AF37]" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold">
              © {new Date().getFullYear()} 1 BLUE PLUTO
            </p>
            <span className="hidden md:block w-1 h-1 bg-gray-800 rounded-full" />
            <p className="text-gray-700 text-[10px] uppercase tracking-[0.1em]">
              Designed for Powerful Evolution
            </p>
          </div>
          
          <div className="flex space-x-10">
            {['Privacy', 'Terms', 'Consulting'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-gray-600 hover:text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-black transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;