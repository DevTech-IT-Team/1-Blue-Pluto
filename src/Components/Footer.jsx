import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUp, ArrowRight, ShieldCheck } from 'lucide-react';
import LegalModal from './LegalModal';
import BrandLogo from './BrandLogo';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('privacy');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLegalModal = (tab) => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
  ];

  return (
    <>
      <footer className="bg-[#0a0a0a] text-white relative overflow-hidden">
        {/* Gold Hairline & Ambient Glow */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[70%] h-64 bg-[#003366]/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 lg:gap-16">
            
            {/* Brand Column */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start space-y-8">
              <BrandLogo imgClassName="h-16 w-auto sm:h-[4.5rem]" />
              <p className="text-gray-500 text-base leading-relaxed max-w-sm font-light text-center md:text-left">
                Architecting <strong className="text-white font-medium">Powerful Evolution</strong> through elite fiduciary consulting and innovative brand strategy. Grounded in trust, defined by results.
              </p>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 text-[#D4AF37]">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Fiduciary Excellence</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-8">
                <span className="w-6 h-px bg-[#D4AF37]/60" />
                Navigation
              </h4>
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
              <h4 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-8">
                <span className="w-6 h-px bg-[#D4AF37]/60 md:hidden" />
                Direct Inquiries
                <span className="hidden md:block w-6 h-px bg-[#D4AF37]/60" />
              </h4>
              <div className="space-y-6 md:text-right">
                <a 
                  href="mailto:lauramarie@1bluepluto.com" 
                  className="inline-flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-[#D4AF37]/50 hover:bg-white/[0.07] transition-all group"
                >
                  <div className="text-left md:text-right">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Laura Marie</p>
                    <p className="text-white font-bold break-all">lauramarie@1bluepluto.com</p>
                  </div>
                  <div className="w-10 h-10 shrink-0 bg-[#003366] rounded-xl flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                </a>

                <div className="flex items-start gap-3 text-gray-500 md:justify-end">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[#D4AF37]" />
                  <p className="text-sm leading-relaxed font-light md:text-right">
                    3750 Gunn Hwy, Suite 306 C1064<br />
                    Tampa, FL 33618
                  </p>
                </div>

                <div className="pt-2 flex justify-start md:justify-end">
                  <motion.button 
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="p-4 bg-[#111111] border border-white/10 rounded-2xl hover:border-[#D4AF37] transition-all group shadow-xl cursor-pointer"
                    aria-label="Scroll to top"
                  >
                    <ArrowUp size={24} className="text-[#D4AF37]" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]/80">
                Est. 2026
              </span>
              <span className="hidden sm:block h-4 w-px bg-white/10" />
              <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold">
                © {new Date().getFullYear()} 1 Blue Pluto — All Rights Reserved. Ploutōn Evolution LLC.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <button 
                onClick={() => openLegalModal('privacy')}
                className="text-gray-500 hover:text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-black transition-colors cursor-pointer"
              >
                Privacy
              </button>
              <button 
                onClick={() => openLegalModal('terms')}
                className="text-gray-500 hover:text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-black transition-colors cursor-pointer"
              >
                Terms
              </button>
              <a 
                href="https://www.linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-black transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal Component */}
      <LegalModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialTab={modalTab} 
      />
    </>
  );
};

export default Footer;