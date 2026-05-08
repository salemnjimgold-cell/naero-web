import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Home, Briefcase, Users, Brain, Shield, Mic, Languages, 
  MapPin, CheckCircle2, XCircle, ArrowRight, Sparkles, Zap, 
  Lock, Calendar, Heart, GraduationCap, Smartphone
} from 'lucide-react';
import './Features.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const FeatureCard = ({ icon: Icon, title, description, tags, isLarge }) => (
  <motion.div 
    variants={fadeUp}
    className={`feature-showcase-card glass-card p-8 group hover-glow ${isLarge ? 'md:col-span-2' : ''}`}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
  >
    <div className={`icon-box mb-6 ${isLarge ? 'ai-glow' : ''}`}>
      <Icon size={28} className={isLarge ? 'text-primary-cyan animate-pulse' : 'text-primary-cyan'} />
    </div>
    <h3 className={`text-2xl font-bold mb-4 ${isLarge ? 'text-gradient' : 'text-white'}`}>{title}</h3>
    <p className="text-muted text-lg leading-relaxed mb-6">{description}</p>
    {tags && (
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="glass-tag text-xs">{tag}</span>
        ))}
      </div>
    )}
  </motion.div>
);

export default function Features() {
  return (
    <div className="features-page bg-cinematic">
      {/* 1. HERO SECTION */}
      <section className="hero-section relative overflow-hidden">
        <div className="hero-particles"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="hero-content"
            >
              <motion.div variants={fadeUp} className="badge mb-6">
                <span className="badge-glow"></span>
                🚀 Premium Features Unleashed
              </motion.div>
              <motion.h1 variants={fadeUp} className="hero-title text-6xl font-bold mb-6">
                Not a <span className="text-gradient">Stranger</span> Anymore.
              </motion.h1>
              <motion.h2 variants={fadeUp} className="text-2xl font-medium text-white/90 mb-6 italic">
                “Your intelligent companion for moving, traveling, and starting life in a new country.”
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-muted leading-relaxed mb-10">
                Naero helps foreigners, travelers, students, and newcomers discover safe places, affordable living, real local experiences, temporary jobs, trusted communities, and AI-powered guidance — all in one app.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <button className="btn-primary px-8 py-4 text-lg group">
                  Get the App <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-secondary px-8 py-4 text-lg">
                  Watch Demo
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hero-visual flex justify-center relative"
            >
              <div className="absolute inset-0 bg-primary-cyan/20 blur-[120px] rounded-full animate-pulse"></div>
              <img src="/new_mascot.png" alt="Naero Mascot" className="w-full max-w-md animate-float relative z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES GRID */}
      <section className="section-padding relative">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="section-title mb-6">Experience the <span className="text-gradient">Next Era</span> of Living</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">Explore the tools we've built to make your global transition effortless.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <FeatureCard 
              icon={Globe}
              title="Smart City Discovery"
              description="Find the best areas to live based on budget, lifestyle, safety, nightlife, nature, beaches, historical places, and transportation."
            />
            <FeatureCard 
              icon={Home}
              title="Affordable Living Finder"
              description="Discover cheap hotels, shared apartments, budget-friendly neighborhoods, and hidden local places tourists never find."
            />
            <FeatureCard 
              icon={Briefcase}
              title="Temporary Jobs & Opportunities"
              description="Find beginner-friendly work opportunities for foreigners, travelers, students, expats, and new arrivals."
              tags={['Cafés', 'Delivery', 'Seasonal Work', 'Freelance', 'Local Businesses']}
            />
            <FeatureCard 
              icon={Users}
              title="Community & Real People"
              description="Connect with travelers, expats, locals, and students nearby. Share reviews, voice notes, videos, warnings, and real experiences."
            />
            <FeatureCard 
              icon={Brain}
              isLarge={true}
              title="Naero AI Assistant"
              description="Your AI travel and newcomer assistant available 24/7 for local advice, transportation help, translation, safety guidance, and cultural support."
            />
            <FeatureCard 
              icon={Shield}
              title="Trust & Safety Signals"
              description="Naero helps users avoid scams, tourist traps, unsafe areas, fake listings, and overpriced places through real community feedback."
            />
            <FeatureCard 
              icon={Mic}
              title="Real Audio & Video Reviews"
              description="Users can upload voice reviews, short videos, and real daily experiences to make information more human and trustworthy."
            />
            <FeatureCard 
              icon={Languages}
              title="Multi-Language Experience"
              description="Naero automatically adapts to the user's language and location for a stress-free experience."
            />
          </motion.div>
        </div>
      </section>

      {/* 3. EMOTIONAL BRAND MESSAGE */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-blue/5 z-0"></div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-16 text-center max-w-4xl mx-auto premium-border"
          >
            <Heart size={48} className="text-primary-cyan mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl font-bold mb-8 text-white">Designed for People Who Feel <span className="text-gradient">Lost</span> in a New Country</h2>
            <p className="text-2xl text-muted leading-relaxed italic">
              “Moving to a new country can feel confusing, lonely, and stressful. Naero was built to make people feel safer, more connected, and more confident wherever they go.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section className="section-padding bg-cinematic/50 border-y border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">The <span className="text-gradient">Naero Edge</span></h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card overflow-hidden"
            >
              <div className="grid grid-cols-2 bg-white/5 p-6 border-b border-white/10 font-bold text-xl">
                <div className="text-center text-muted">Traditional Apps</div>
                <div className="text-center text-primary-cyan">Naero</div>
              </div>
              
              {[
                { old: 'Only maps', new: 'Real human guidance' },
                { old: 'Tourist-focused', new: 'Built for real living' },
                { old: 'Fake reviews', new: 'Voice & video experiences' },
                { old: 'No newcomer support', new: 'AI + Community support' },
                { old: 'No social integration', new: 'Real local connections' }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                  <div className="flex items-center justify-center gap-3 text-muted">
                    <XCircle size={18} className="text-red-500/50" /> {row.old}
                  </div>
                  <div className="flex items-center justify-center gap-3 text-white font-medium border-l border-white/5 bg-primary-cyan/5">
                    <CheckCircle2 size={18} className="text-primary-cyan" /> {row.new}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. FUTURE FEATURES */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Coming <span className="text-gradient">Soon</span></h2>
            <p className="text-muted text-lg">Pushing the boundaries of global integration technology.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { icon: Sparkles, name: 'AI relocation planner' },
              { icon: Lock, name: 'Emergency support' },
              { icon: Shield, name: 'Legal & visa guidance' },
              { icon: Calendar, name: 'Local event discovery' },
              { icon: Zap, name: 'Verified safe zones' },
              { icon: GraduationCap, name: 'Student mode' },
              { icon: Smartphone, name: 'Nomad tools' }
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex flex-col items-center text-center group hover:border-primary-cyan/50"
              >
                <div className="icon-box mb-4 group-hover:scale-110 transition-transform">
                  <f.icon size={20} className="text-primary-cyan" />
                </div>
                <span className="text-xs font-semibold text-muted uppercase tracking-wider">{f.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="hero-particles"></div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-20 text-center max-w-4xl mx-auto border-primary-cyan/30 bg-gradient-to-br from-primary-cyan/10 to-transparent"
          >
            <h2 className="text-5xl font-bold mb-8 text-white">Start Anywhere. <span className="text-gradient">Feel at Home</span> Everywhere.</h2>
            <button className="btn-primary px-12 py-5 text-xl rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] animate-pulse">
              Get the App
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
