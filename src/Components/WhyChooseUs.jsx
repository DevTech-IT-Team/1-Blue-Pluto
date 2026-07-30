import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, Gem, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: "01",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Fiduciary Integrity",
      description: "Unlike standard consultants, we operate with a fiduciary mindset—your best interests are our legal and moral compass."
    },
    {
      id: "02",
      icon: <Gem className="w-5 h-5" />,
      title: "The 'Wealthy One' Approach",
      description: "In our world, wealth isn't just capital—it is the trust, clarity, and evolution of your business."
    },
    {
      id: "03",
      icon: <Zap className="w-5 h-5" />,
      title: "Agile Evolution",
      description: "Set up your business trust in a week, not months."
    },
    {
      id: "04",
      icon: <Users className="w-5 h-5" />,
      title: "Private Mentorship",
      description: "No public business, legal advice, financial advice or therapy is offered. All services are provided as private educational interactions."
    }
  ];

  return (
    <section id="why-choose-us" className="py-32 bg-[#0a0a0a] relative overflow-hidden pt-14">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#003366]/5 skew-x-12 translate-x-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-20">
          
          {/* Left Side: The Hook & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/5 flex flex-col justify-center space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs">
                The Pluto Advantage
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-[1.2] tracking-tighter">
                Why Leaders Trust <br /> 
                <span className="font-black tracking-tighter text-white">
                  1 <span className="text-[#D4AF37]">BLUE</span> PLUTO
                </span>
              </h3>
              <div className="text-gray-400 text-base md:text-lg leading-relaxed font-light space-y-4">
                <p>
                  We don’t just advise, we guide members through the complexities of a successful mission with the foresight of a partner and the precision of a specialist.
                </p>
                <p>
                  Our innovative approach empowers entrepreneurs, family businesses and individuals by helping them establish a business trust, build private credit, safeguard assets and protect their legacy. We understand business trust law, commercial strategies, and the principles of living privately. Our destination-your success!
                </p>
              </div>
            </div>
            
            {/* Stat Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#003366]/20 to-transparent border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]" />
              <div className="flex items-center gap-6">
                <div className="text-5xl font-black text-white group-hover:text-[#D4AF37] transition-colors duration-500">100%</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-tight">
                  Custom Service <br /> Strategy Tailoring
                </div>
              </div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="mt-6 flex items-center gap-2 text-[#D4AF37] text-xs font-bold cursor-pointer"
              >
                DISCOVER OUR METHOD <ArrowRight size={14} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Reasons Grid */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ backgroundColor: "rgba(0, 51, 102, 0.15)" }}
                  className="bg-[#0a0a0a] p-12 transition-all duration-500 group relative"
                >
                  {/* Subtle Corner Accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#D4AF37]/0 group-hover:border-[#D4AF37]/30 transition-all duration-500 rounded-tr-3xl" />
                  
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-12 h-12 flex items-center justify-center text-[#D4AF37] bg-[#D4AF37]/5 rounded-xl group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                      {reason.icon}
                    </div>
                    <span className="text-6xl font-black text-white/[0.03] group-hover:text-[#D4AF37]/10 transition-colors select-none">
                      {reason.id}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors tracking-tight">
                    {reason.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-400 transition-colors">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;