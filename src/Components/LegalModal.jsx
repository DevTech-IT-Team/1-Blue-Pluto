import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, Lock } from 'lucide-react';
import BrandLogo from './BrandLogo';

const LegalModal = ({ isOpen, onClose, initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = React.useState(initialTab);

  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-[#111111] border border-[#D4AF37]/30 rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#0a0a0a]">
              <div className="flex items-center gap-4 min-w-0">
                <BrandLogo showTagline={false} asLink={false} imgClassName="h-12 w-auto sm:h-14" />
                <span className="text-[#D4AF37] font-black text-xs sm:text-sm uppercase tracking-[0.2em]">
                  Legal & Privacy
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Tab Switches */}
            <div className="flex border-b border-white/5 bg-[#0e0e0e]">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${
                  activeTab === 'privacy'
                    ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] bg-white/5'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <Lock size={14} /> Privacy Policy
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${
                  activeTab === 'terms'
                    ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] bg-white/5'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <FileText size={14} /> Terms & Conditions
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-6 text-gray-300 text-sm leading-relaxed font-light">
              {activeTab === 'privacy' ? (
                <>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">Privacy Policy & Member Confidentiality</h3>
                    <p className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold">Last Updated: 2026</p>
                  </div>

                  <p>
                    At 1 Blue Pluto, member privacy, financial autonomy, and absolute confidentiality are foundational principles. 
                    We are dedicated to safeguarding all communications, inquiries, and personal details exchanged through our platform.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-white font-bold uppercase tracking-wider text-xs">1. Information Collection & Usage</h4>
                    <p className="text-gray-400">
                      We collect minimal information necessary to deliver private consulting, education, and mentoring services. 
                      Information provided through inquiry forms or private correspondence is used strictly to communicate regarding your mission and requested services.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-white font-bold uppercase tracking-wider text-xs">2. Confidentiality & Non-Disclosure</h4>
                    <p className="text-gray-400">
                      All member records, trust discussions, and operational consultations are kept strictly private. 
                      We never sell, rent, trade, or publicly disclose member information to any third parties under any circumstances.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-white font-bold uppercase tracking-wider text-xs">3. Private Interactions</h4>
                    <p className="text-gray-400">
                      Our services are offered by invitation or referral only. All communications occur within private educational frameworks, designed to respect member autonomy.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-white font-bold uppercase tracking-wider text-xs">4. Contact & Inquiries</h4>
                    <p className="text-gray-400">
                      If you have questions regarding member privacy or wish to update your preferred contact details, please contact Laura Marie directly at <a href="mailto:lauramarie@1bluepluto.com" className="text-[#D4AF37] hover:underline">lauramarie@1bluepluto.com</a>.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">Terms & Conditions of Service</h3>
                    <p className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold">Last Updated: 2026</p>
                  </div>

                  <p>
                    Welcome to 1 Blue Pluto. By accessing this website or engaging in our educational and consulting services, 
                    you agree to be bound by the following Terms & Conditions.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-white font-bold uppercase tracking-wider text-xs">1. Educational Purpose Disclaimer</h4>
                    <div className="p-4 rounded-xl bg-[#003366]/20 border border-[#D4AF37]/30 text-gray-200 italic">
                      "All information provided is for educational purposes only and does not constitute legal, financial, or therapeutic advice."
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-white font-bold uppercase tracking-wider text-xs">2. Scope of Services</h4>
                    <p className="text-gray-400">
                      1 Blue Pluto provides private consulting, education, mentoring, and back-office support services. 
                      All guidance is structured as private educational interactions designed to help members navigate business trust structures and operational strategies.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-white font-bold uppercase tracking-wider text-xs">3. Autonomy & Responsibility</h4>
                    <p className="text-gray-400">
                      Members retain full responsibility and autonomy over their legal structures, financial transactions, and commercial operations. 
                      1 Blue Pluto does not operate as a public legal firm or certified public accounting entity.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-white font-bold uppercase tracking-wider text-xs">4. Proprietary Content</h4>
                    <p className="text-gray-400">
                      All educational materials, templates, frameworks, and visual branding provided by 1 Blue Pluto are proprietary and intended solely for member educational use.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-white/10 bg-[#0a0a0a] flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <ShieldCheck size={16} />
                <BrandLogo showTagline={false} asLink={false} imgClassName="h-9 w-auto" />
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-[#D4AF37] hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
