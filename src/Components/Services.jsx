import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Megaphone, Briefcase, PencilRuler, 
  GraduationCap, Layers, ArrowUpRight 
} from 'lucide-react';

const Services = () => {
  const serviceList = [
    {
      title: "Business Trust & Fiduciary",
      category: "Consulting",
      description: "Expert guidance on fiduciary responsibilities and trust management. We act as your grounded advisor to ensure stability.",
      icon: <Shield className="w-6 h-6" />,
      features: ["Trust Consulting", "Fiduciary Oversight", "Strategic Guidance"]
    },
    {
      title: "Graphic Design & Marketing",
      category: "Advertising",
      description: "High-impact visual storytelling and strategic advertising campaigns that evolve your brand's presence.",
      icon: <Megaphone className="w-6 h-6" />,
      features: ["Brand Identity", "Ad Strategy", "Visual Content"]
    },
    {
      title: "Back-Office Support",
      category: "Operations",
      description: "Optimizing the engine of your business. We streamline administrative tasks so you can focus on high-level growth.",
      icon: <Briefcase className="w-6 h-6" />,
      features: ["Process Optimization", "Admin Support", "Workflow Audit"]
    },
    {
      title: "Professional Training",
      category: "Education",
      description: "Equipping your team with the skills they need to maintain the evolution we start together. Custom modules.",
      icon: <GraduationCap className="w-6 h-6" />,
      features: ["Team Workshops", "Skill Development", "Operational Training"]
    },
    {
      title: "Creative Design",
      category: "Marketing",
      description: "Custom creative services from UI/UX concepts to print media, ensuring your brand looks as elite as your services.",
      icon: <PencilRuler className="w-6 h-6" />,
      features: ["Logo Design", "Print Media", "Digital Assets"]
    },
    {
      title: "Custom Tailored Services",
      category: "Bespoke",
      description: "Every business is unique. We build specialized service packages that address your specific roadblocks.",
      icon: <Layers className="w-6 h-6" />,
      features: ["Niche Consulting", "Scalable Support", "Hybrid Models"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#0a0a0a] relative overflow-hidden pt-14">
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
                <span className="text-[10px] font-black tracking-widest text-gray-600 uppercase">
                  {service.category}
                </span>
                <h4 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                  {service.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-400 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Features - Minimalist style */}
              <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                {service.features.map((feature, fIndex) => (
                  <span key={fIndex} className="text-[10px] font-medium text-gray-500 bg-white/5 px-3 py-1 rounded-full group-hover:border-[#D4AF37]/20 border border-transparent transition-colors">
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
      </div>
    </section>
  );
};

export default Services;