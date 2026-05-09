import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, Utensils, Bus, Briefcase, FileText, Shield, 
  Users, Brain, Clock, Map, TrendingUp, CheckCircle2,
  ArrowRight, Heart, LifeBuoy, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Newcomers.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Newcomers() {
  return (
    <div className="newcomers-page bg-cinematic">
      {/* 1. HERO SECTION */}
      <section className="hero-section relative overflow-hidden">
        <div className="hero-particles"></div>
        <div className="container relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="badge mb-6 border-primary-green/30 bg-primary-green/10 text-primary-green">
                <span className="badge-glow bg-primary-green/20"></span>
                🌱 Your New Chapter Starts Here
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6">
                A new country should <span className="text-gradient">not feel impossible</span>.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-muted leading-relaxed mb-10 max-w-2xl mx-auto">
                Naero supports newcomers with practical guidance, trusted local information, affordable living options, beginner-friendly opportunities, and community help.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4 text-lg">
                  Find support
                </Link>
                <Link to="/features" className="btn-secondary px-8 py-4 text-lg">
                  Explore newcomer tools
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. EMOTIONAL INTRO */}
      <section className="section-padding">
        <div className="container">
          <motion.div 
            className="glass-card p-12 md:p-16 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-green opacity-5 rounded-full blur-3xl"></div>
            <div className="max-w-3xl relative z-10">
              <Heart className="text-primary-green mb-6" size={40} />
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">We know the feeling.</h2>
              <div className="space-y-6 text-xl text-muted leading-relaxed">
                <p>Arriving in a new country can be overwhelming. The stress of not knowing where to go, who to trust, or how to find affordable services can make even the strongest people feel alone.</p>
                <p>Naero was built for those moments. Whether you are a student, a migrant, or an expat, we are here to help you understand local life and find your feet faster.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MAIN SUPPORT CARDS */}
      <section className="section-padding bg-white/5 border-y border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential <span className="text-gradient">Support</span></h2>
            <p className="text-muted text-lg">Everything you need to navigate your new home.</p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Home, title: "Affordable housing", desc: "Find areas where rent is fair and listings are verified." },
              { icon: Utensils, title: "Cheap food & needs", desc: "Local markets and budget-friendly shops near you." },
              { icon: Bus, title: "Transit guidance", desc: "Master the local buses, trains, and navigation hacks." },
              { icon: Briefcase, title: "Beginner jobs", desc: "Opportunities for those just starting out in the country." },
              { icon: FileText, title: "Basic documents", desc: "Clear guides on visas, IDs, and local requirements." },
              { icon: Shield, title: "Emergency info", desc: "Immediate access to hospitals, police, and safe zones." },
              { icon: Users, title: "Community help", desc: "Connect with people who have walked your path." },
              { icon: Brain, title: "AI Assistant", desc: "Ask any question in your native language, anytime." }
            ].map((card, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-card p-8 hover:border-primary-green/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center mb-6">
                  <card.icon className="text-primary-green" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. NEWCOMER JOURNEY TIMELINE */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold mb-16 text-center">Your <span className="text-gradient">Journey</span> to Belonging</h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                { time: "First Day", title: "Find Essentials", desc: "SIM cards, temporary housing, and a safe route to your destination." },
                { time: "First Week", title: "Understand the City", desc: "Mapping out your neighborhood, groceries, and local transport." },
                { time: "First Month", title: "Build Routine", desc: "Connecting with communities, finding stable work, and social life." },
                { time: "Long Term", title: "Connect & Grow", desc: "Becoming a local yourself and helping others who arrive after you." }
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className={`glass-card p-8 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      <span className="text-primary-green font-bold mb-2 block">{step.time}</span>
                      <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                      <p className="text-muted leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary-green shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10 hidden md:block"></div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST AND SAFETY */}
      <section className="section-padding bg-cinematic/50 border-y border-white/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="icon-box mb-6 bg-red-500/10">
                <Shield className="text-red-400" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Your safety is our <span className="text-gradient">priority</span>.</h2>
              <p className="text-xl text-muted leading-relaxed mb-8">
                Moving is risky. Naero uses community feedback, real-time warnings, authentic voice/video experiences, and AI assistance to reduce confusion and protect you from scams and overpriced traps.
              </p>
              <ul className="space-y-4">
                {[
                  "Verified housing warnings",
                  "Scam detection in job listings",
                  "Safe-zone mapping",
                  "24/7 AI multilingual help"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="text-primary-green" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="glass-card p-12 bg-gradient-to-br from-red-500/5 to-transparent border-red-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <AlertCircle className="text-red-400 mb-6" size={48} />
              <h3 className="text-2xl font-bold text-white mb-6 italic">“I wish I had this when I first arrived.”</h3>
              <p className="text-muted text-lg leading-relaxed">
                Most newcomers learn the hard way through mistakes that cost time and money. Naero is designed to prevent those mistakes before they happen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="section-padding">
        <div className="container">
          <motion.div 
            className="glass-card p-16 text-center max-w-4xl mx-auto border-primary-green/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <LifeBuoy className="mx-auto text-primary-green mb-8 animate-pulse" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Naero is built for the moment you arrive and <span className="text-gradient">don’t know where to start</span>.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary px-10 py-5 text-xl bg-gradient-to-r from-primary-green to-primary-cyan border-none">Get Started Now</Link>
              <Link to="/community" className="btn-secondary px-10 py-5 text-xl">Join Community</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
