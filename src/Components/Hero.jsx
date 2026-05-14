import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Paintbrush, LifeBuoy, Settings, MousePointer2 } from 'lucide-react';

const Hero = () => {
  const services = [
    { icon: <ShieldCheck size={24} />, title: "Business Trust", desc: "Fiduciary guidance & consulting" },
    { icon: <Paintbrush size={24} />, title: "Creative Growth", desc: "Graphic design & marketing" },
    { icon: <LifeBuoy size={24} />, title: "Back-Office", desc: "Support & professional training" },
    { icon: <Settings size={24} />, title: "Custom Solutions", desc: "Tailored to your specific needs" },
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden pt-14">
      
      {/* Background Elements - Professional Depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#003366] opacity-20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#D4AF37] opacity-10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: The Hook */}
          <div className="lg:col-span-7 space-y-10">
           
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter"
            >
              POWERFUL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-[#f3d06b] to-[#8d7016]">
                EVOLUTION
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-light"
            >
              1 Blue Pluto provides elite <strong className="text-white font-semibold">Business Trust consulting</strong> and bespoke marketing strategies designed to scale your vision through expert guidance and fiduciary integrity.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-5"
            >
              <button className="bg-[#D4AF37] hover:bg-white text-black font-black px-10 py-5 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)]">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </button>
              
              <a 
                href="mailto:lauramarie@1bluepluto.com"
                className="group border-b-2 border-gray-800 hover:border-[#D4AF37] text-white px-2 py-5 flex items-center transition-all duration-300 font-bold"
              >
                Contact Us
                <MousePointer2 className="ml-2 opacity-0 group-hover:opacity-100 transition-all -rotate-45" size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Bento Grid Services */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {services.map((item, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-3xl border border-white/5 transition-all duration-500 group relative overflow-hidden
                  ${index === 1 || index === 2 ? 'bg-[#003366]/20' : 'bg-white/5'}
                  hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/40 hover:-translate-y-2
                `}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {item.icon}
                </div>
                <div className="mb-6 text-[#D4AF37] transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20"></div>
    </section>
  );
};

export default Hero;