import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Target, Users, Zap, Mail, Quote } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: <Landmark size={22} />,
      title: "Fiduciary Excellence",
      desc: "Navigating business trust with absolute transparency and commitment to your best interests."
    },
    {
      icon: <Target size={22} />,
      title: "Strategic Marketing",
      desc: "Transforming brand identities through high-level design and strategies that drive growth."
    },
    {
      icon: <Users size={22} />,
      title: "Dedicated Support",
      desc: "Strengthening your core with back-office support and professional internal training."
    },
    {
      icon: <Zap size={22} />,
      title: "Bespoke Solutions",
      desc: "Custom services specifically tailored to your unique challenges and market position."
    }
  ];

  return (
    <section id="about" className="py-24 pt-14 bg-[#0a0a0a] relative overflow-hidden">
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

            <div className="relative p-10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 group">
              <Quote className="absolute -top-4 -left-4 text-[#003366] group-hover:text-[#D4AF37] transition-colors duration-500" size={40} fill="currentColor" />
              <p className="text-gray-200 text-xl leading-relaxed font-light italic">
                "The name is derived from the Greek <span className="text-[#D4AF37] font-semibold">Ploutōn</span>, meaning 'the wealthy one.' In our world, wealth isn't just capital—it is the trust, clarity, and evolution of your business."
              </p>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              At 1 Blue Pluto, we believe that powerful evolution requires a dual foundation: 
              unshakeable fiduciary trust and innovative market presence. We don't just advise; 
              we guide our clients through the complexities of business management with the 
              foresight of a partner and the precision of a specialist.
            </p>
          </motion.div>

          {/* Right Column: The Pillars */}
          <div className="lg:w-5/12 grid gap-6 w-full">
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
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">
                      {pillar.title}
                    </h4>
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
          className="mt-24 p-10 rounded-3xl bg-[#003366]/10 border border-[#D4AF37]/20 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden group"
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
      </div>
    </section>
  );
};

export default About;