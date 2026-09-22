import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, EyeOff, Lock, Rocket, MousePointer2, Quote } from 'lucide-react';

const Hero = () => {
  const services = [
    { icon: <ShieldCheck size={24} />, title: "Business Trust", desc: "Who do you trust?" },
    { icon: <EyeOff size={24} />, title: "Privacy", desc: "What will a search of your name reveal?" },
    { icon: <Lock size={24} />, title: "Asset Protection", desc: "Can someone easily take away your assets?" },
    { icon: <Rocket size={24} />, title: "Evolution", desc: "Are you free to control your destination?" },
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden pt-36 pb-16 lg:pt-44">
      
      {/* Background Elements - Professional Depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#003366] opacity-20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#D4AF37] opacity-10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: The Hook */}
          <div className="lg:col-span-7 space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tighter uppercase"
            >
              JOIN US ON A <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-[#f3d06b] to-[#8d7016]">
                LIFE CHANGING JOURNEY!
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed font-light">
                <span className="text-[#D4AF37] font-bold tracking-wider block mb-1">OUR MISSION...</span>
                To introduce you to a way of life you may not know exists!
              </p>

              {/* Greek Meaning Text Box */}
              <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 group">
                <Quote className="absolute -top-3 -left-3 text-[#003366] group-hover:text-[#D4AF37] transition-colors duration-500" size={32} fill="currentColor" />
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-light italic">
                  "The name is derived from the Greek <span className="text-[#D4AF37] font-semibold">Ploutōn</span>, meaning 'the wealthy one.' In our world, wealth isn't just capital—it is the trust, clarity, and evolution of your business."
                </p>
              </div>
            </motion.div>

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
                className={`p-6 sm:p-8 rounded-3xl border border-white/5 transition-all duration-500 group relative overflow-hidden
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
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white transition-colors">
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