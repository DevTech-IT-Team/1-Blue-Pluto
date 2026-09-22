import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, GraduationCap, Compass, Briefcase, 
  Lock, CreditCard, ArrowUpRight 
} from 'lucide-react';

const Services = () => {
  const serviceList = [
    {
      category: "CONSULTING",
      title: "Business Trust",
      description: "Live privately, prosper intentionally, create a lasting impact for generations to come.",
      icon: <Shield className="w-6 h-6" />,
      features: ["Private Living", "Intentional Prosperity", "Generational Legacy"]
    },
    {
      category: "EDUCATION",
      title: "Learn to Operate Private",
      description: "Discover the alternate universe of private commerce. Learn how to draft and finalize trust documents with clarity and integrity.",
      icon: <GraduationCap className="w-6 h-6" />,
      features: ["Private Commerce", "Trust Documents", "Integrity & Clarity"]
    },
    {
      category: "MENTORING",
      title: "Private, Lawful, Powerful",
      description: "Understand the difference between public and private status, and how you can leave a lasting impact, instead of an ongoing nightmare-public probate court.",
      icon: <Compass className="w-6 h-6" />,
      features: ["Public vs Private", "Lawful Autonomy", "Avoid Probate"]
    },
    {
      category: "EXPERT GUIDANCE",
      title: "Asset Protection",
      description: "Learn about legal separation. Safeguard your name, real estate, real property and your legacy using strategies the privileged use to build, protect and pass on wealth.",
      icon: <Lock className="w-6 h-6" />,
      features: ["Legal Separation", "Asset Safeguarding", "Wealth Preservation"]
    },
    {
      category: "MISSION CONTROL",
      title: "Establish Private Credit",
      description: "Learn how your business can have it’s own private legal identity, establish private credit and operate in commerce without relying on your SSN.",
      icon: <CreditCard className="w-6 h-6" />,
      features: ["Legal Identity", "Private Credit", "No SSN Reliance"]
    },
    {
      category: "OPERATIONS",
      title: "Back Office Support",
      description: "Your mission, made easier with all the help you need. Streamline administrative tasks so you can focus on your destination.",
      icon: <Briefcase className="w-6 h-6" />,
      features: ["Administrative Ease", "Task Streamlining", "Destination Focus"]
    }
  ];

  return (
    <section id="services" className="py-14 lg:py-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#003366]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs mb-5"
            >
              Our Expertise
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-black text-white tracking-tighter"
            >
              Full-Spectrum <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white/60">Evolution</span>
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 max-w-xs text-sm leading-relaxed border-l border-gray-800 pl-6"
          >
            Bespoke solutions designed to bridge the gap between creative vision and operational excellence.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 bg-[#111111]/50 backdrop-blur-sm border border-white/5 rounded-[2rem] transition-all duration-500 hover:border-[#D4AF37]/40 hover:bg-[#003366]/10"
            >
              {/* Top Row: Icon & Action */}
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 bg-[#0a0a0a] border border-white/10 text-[#D4AF37] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500 shadow-xl">
                  {service.icon}
                </div>
                <div className="text-[#D4AF37] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 mb-8">
                <span className="text-[10px] font-black tracking-widest text-[#D4AF37] uppercase">
                  {service.category}
                </span>
                <h4 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Features - Minimalist style */}
              <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                {service.features.map((feature, fIndex) => (
                  <span key={fIndex} className="text-[10px] font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full group-hover:border-[#D4AF37]/20 border border-transparent transition-colors">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Background Indexing */}
              <span className="absolute top-10 right-10 text-6xl font-black text-white/[0.02] group-hover:text-[#D4AF37]/5 transition-colors pointer-events-none">
                {index + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-16 text-center text-xs text-gray-500 max-w-3xl mx-auto border-t border-white/10 pt-6">
          <p>
            <strong className="text-gray-400">* Disclaimer:</strong> "All information provided is for educational purposes only and does not constitute legal, financial, or therapeutic advice."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;