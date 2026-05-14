import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Clock, Send, ShieldCheck, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] relative overflow-hidden pt-14">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#003366] opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-[#D4AF37] opacity-5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* Left Side: Editorial Info Stack */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
                Connect
              </h2>
              <h3 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                Begin Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-white to-white/40">
                  Evolution
                </span>
              </h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                Ready to elevate your business trust or refine your brand's creative edge? Reach out for a confidential consultation.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-white/5">
              {[
                { 
                  icon: <Mail size={20} />, 
                  label: "Email Laura Marie", 
                  value: "lauramarie@1bluepluto.com",
                  href: "mailto:lauramarie@1bluepluto.com"
                },
                { 
                  icon: <MessageSquare size={20} />, 
                  label: "Specialization", 
                  value: "Business Trust & Marketing Strategy" 
                },
                { 
                  icon: <Clock size={20} />, 
                  label: "Response Window", 
                  value: "24-48 Business Hours" 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center group cursor-pointer">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500 shadow-lg">
                    {item.icon}
                  </div>
                  <div className="ml-6">
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-bold group-hover:text-[#D4AF37] transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-white font-bold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Glassmorphic Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative p-1 md:p-px bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem]">
              <div className="bg-[#111111] p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                
                <form className="relative z-10 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all placeholder:text-gray-700"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Corporate Email</label>
                      <input 
                        type="email" 
                        className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all placeholder:text-gray-700"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Focus Area</label>
                    <div className="relative">
                      <select className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all appearance-none cursor-pointer">
                        <option>Business Trust Consulting</option>
                        <option>Graphic Design & Marketing</option>
                        <option>Back-Office Support</option>
                        <option>Bespoke Custom Service</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <Globe size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Project Brief</label>
                    <textarea 
                      rows="4" 
                      className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all placeholder:text-gray-700 resize-none"
                      placeholder="Tell us about your evolution goals..."
                    ></textarea>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#D4AF37] hover:bg-white text-black font-black uppercase tracking-[0.3em] py-5 rounded-xl flex items-center justify-center transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(212,175,55,0.2)] group"
                  >
                    Send Inquiry
                    <Send size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Professional Sign-off Footer */}
        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-[#003366]" size={24} />
            <span className="text-gray-500 text-xs tracking-widest font-bold uppercase">1 BLUE PLUTO • Est. 2026</span>
          </div>
          
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            © All Rights Reserved. Ploutōn Evolution LLC.
          </p>

          <div className="flex space-x-8">
            {['Privacy', 'Terms', 'LinkedIn'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold transition-colors">
                {item}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;