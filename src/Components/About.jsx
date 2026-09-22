import React from 'react';
import { motion } from 'framer-motion';
import { FileSignature, BadgeCheck, Landmark, CreditCard, Mail } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      step: "01",
      icon: <FileSignature size={22} />,
      title: "Start a UBOT",
      desc: "A proven Declaration of Trust document is the foundation we provide."
    },
    {
      step: "02",
      icon: <BadgeCheck size={22} />,
      title: "Obtain an EIN",
      desc: "Register properly with the IRS and obtain your trust EIN number."
    },
    {
      step: "03",
      icon: <Landmark size={22} />,
      title: "Establish a Banking Relationship",
      desc: "Get your business checking account set up."
    },
    {
      step: "04",
      icon: <CreditCard size={22} />,
      title: "Establish Business Credit",
      desc: "Take your trust to the next level, it’s your destination."
    }
  ];

  const trustPoints = [
    {
      label: "Operating in trust",
      desc: "Conduct your affairs through the trust so your business holds its own lawful identity and operates privately, by your direction."
    },
    {
      label: "Earning, buying, selling and investing in trust",
      desc: "Receive income, acquire and sell property, and hold investments in the name of the trust rather than in your own name."
    },
    {
      label: "Profits and reduced tax liability",
      desc: "Understand how profits are held and distributed within the trust, and how that structure can reduce tax liability."
    },
    {
      label: "Asset and family protection",
      desc: "Create lawful separation between you and what you hold, so your property and your family are shielded from claims made against you personally."
    },
    {
      label: "Wealth preservation",
      desc: "Keep what you build intact instead of losing it to exposure, public probate court and poor structure."
    },
    {
      label: "Future generations",
      desc: "Pass your legacy to the people you choose, on your terms, creating a lasting impact for generations to come."
    }
  ];

  return (
    <section id="about" className="py-14 lg:py-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#003366] opacity-5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-64 h-full bg-gradient-to-r from-[#D4AF37]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left Column: The Story */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-7/12 space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
                The Heritage
              </h2>
              <h3 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                Rooted in Abundance, <br /> 
                Defined by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8d7016]">Integrity.</span>
              </h3>
            </div>

            <div className="relative p-8 rounded-2xl bg-[#003366]/20 border border-[#D4AF37]/30 shadow-lg space-y-8">
              <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
                At 1 Blue Pluto our mission is for you to control your destination with your own business trust.
              </p>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                A business trust changes the way you hold, move and grow everything you own. We guide
                you through every part of that shift:
              </p>

              <ul className="space-y-5">
                {trustPoints.map((point) => (
                  <li key={point.label} className="flex gap-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      <span className="text-white font-semibold">{point.label}</span> — {point.desc}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                We provide private consulting, education, mentoring and fiduciary services tailored to
                your mission, available by invitation or referral only.
              </p>

              <p className="border-t border-[#D4AF37]/30 pt-6 text-[#D4AF37] text-base font-bold tracking-wide">
                We do not offer tax or legal advice.
              </p>
            </div>
          </motion.div>

          {/* Right Column: The Four Steps */}
          <div className="lg:w-5/12 grid gap-6 w-full lg:sticky lg:top-28">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#003366]/20 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                    {pillar.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-[10px] font-black text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors">
                        {pillar.step}
                      </span>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-10 rounded-3xl bg-[#003366]/10 border border-[#D4AF37]/20 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[#D4AF37]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-white font-bold text-2xl mb-2">Ready to start your evolution?</h4>
            <p className="text-gray-400">Secure your consultation with Laura Marie today.</p>
          </div>

          <a 
            href="mailto:lauramarie@1bluepluto.com" 
            className="relative z-10 flex items-center gap-3 bg-[#D4AF37] text-black font-black px-8 py-4 rounded-xl hover:bg-white transition-all duration-300"
          >
            <Mail size={20} />
            Contact
          </a>
        </motion.div>

        {/* Legal Disclaimer */}
        <div className="mt-16 text-center text-xs text-gray-500 max-w-3xl mx-auto border-t border-white/10 pt-6">
          <p>
            <strong className="text-gray-400">Disclaimer:</strong> "All information provided is for educational purposes only and does not constitute legal, financial, or therapeutic advice."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;