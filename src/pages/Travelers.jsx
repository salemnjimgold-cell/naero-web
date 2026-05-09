import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, MapPin, Shield, Star, Camera, Compass, 
  Palmtree, Landmark, Mountain, Utensils, Music, Sparkles,
  Search, CheckCircle2, ArrowRight, MessageCircle, Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Travelers.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Travelers() {
  return (
    <div className="travelers-page bg-cinematic">
      {/* 1. HERO SECTION */}
      <section className="hero-section relative overflow-hidden">
        <div className="hero-particles"></div>
        <div className="container relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="hero-content"
            >
              <motion.div variants={fadeUp} className="badge mb-6">
                <span className="badge-glow"></span>
                ✈️ For Global Explorers
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold mb-6">
                Travel smarter. <span className="text-gradient">Feel local</span> faster.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-muted leading-relaxed mb-10">
                Naero helps travelers discover trusted places, real local experiences, affordable options, and community advice before and during every trip.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link to="/features" className="btn-primary px-8 py-4 text-lg">
                  Start exploring
                </Link>
                <button className="btn-secondary px-8 py-4 text-lg">
                  See how Naero helps
                </button>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hero-visual"
            >
              <div className="glass-card p-4 relative">
                <img src="/app_presentation.png" alt="Travel App Preview" className="rounded-2xl shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 glass-card p-6 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-cyan/20 flex items-center justify-center">
                      <Star className="text-primary-cyan" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-bold">4.9/5 Rating</div>
                      <div className="text-muted text-xs">By Global Travelers</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TRAVELER PAIN POINTS */}
      <section className="section-padding relative">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why traditional travel is <span className="text-red-400">broken</span></h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">We've all been there. The frustration of being just another tourist.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Tourist Traps", desc: "Overpriced menus and fake cultural shows designed for profit, not experience." },
              { title: "Expensive Places", desc: "Paying double because you don't know where locals actually shop and eat." },
              { title: "Language Barriers", desc: "The constant struggle to communicate simple needs or understand directions." },
              { title: "Unsafe Areas", desc: "Accidentally ending up in neighborhoods that aren't traveler-friendly at night." },
              { title: "Fake Reviews", desc: "Bot-generated five-star ratings that lead to disappointing destinations." },
              { title: "Lack of Authenticity", desc: "Seeing only what the brochure shows, missing the soul of the city." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="glass-card p-8 border-l-4 border-red-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h4 className="text-white font-bold mb-3">{item.title}</h4>
                <p className="text-muted text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NAERO SOLUTION CARDS */}
      <section className="section-padding bg-white/5 border-y border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The <span className="text-gradient">Naero</span> Way</h2>
            <p className="text-muted text-lg">Designed to give you the confidence of a local.</p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Globe, title: "Affordable places", desc: "Access a curated list of budget-friendly accommodation and dining." },
              { icon: MapPin, title: "Local recommendations", desc: "Get advice directly from people who live there every day." },
              { icon: Shield, title: "Safe area insights", desc: "Real-time safety scores and neighborhood warnings from the community." },
              { icon: Play, title: "Real reviews", desc: "Listen to audio and watch video reviews. No more fake text bots." },
              { icon: Compass, title: "Smart trip planning", desc: "AI-optimized itineraries based on your budget and interests." },
              { icon: Sparkles, title: "AI travel assistant", desc: "A 24/7 companion in your pocket to solve any travel dilemma." }
            ].map((card, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-card p-10 group hover-glow transition-all">
                <div className="icon-box mb-6 bg-primary-cyan/10 group-hover:bg-primary-cyan/20 transition-colors">
                  <card.icon className="text-primary-cyan" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{card.title}</h3>
                <p className="text-muted leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. EXPERIENCE CATEGORIES */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">What do you want to <span className="text-gradient">discover</span>?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Palmtree, name: "Beaches" },
              { icon: Landmark, name: "Historical" },
              { icon: Mountain, name: "Nature" },
              { icon: Utensils, name: "Food & Cafés" },
              { icon: Music, name: "Nightlife" },
              { icon: Search, name: "Hidden Gems" }
            ].map((cat, i) => (
              <motion.div 
                key={i}
                className="glass-card p-6 flex flex-col items-center gap-4 hover:border-primary-cyan/50 transition-all cursor-pointer group"
                whileHover={{ y: -5 }}
              >
                <cat.icon className="text-muted group-hover:text-primary-cyan transition-colors" size={32} />
                <span className="text-sm font-medium text-muted group-hover:text-white transition-colors">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="section-padding relative overflow-hidden">
        <div className="container relative z-10">
          <div className="glass-card p-12 md:p-16 premium-border">
            <h2 className="text-3xl font-bold mb-12 text-center">Your path to <span className="text-gradient">local</span> status</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Destination", desc: "Choose where you want to go." },
                { step: "02", title: "Interests", desc: "Tell Naero what you love." },
                { step: "03", title: "Suggestions", desc: "Get trusted local advice." },
                { step: "04", title: "Explore", desc: "Go with total confidence." }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="text-5xl font-black text-white/5 mb-4">{item.step}</div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-muted text-sm">{item.desc}</p>
                  {i < 3 && <ArrowRight className="hidden md:block absolute top-1/2 -right-4 text-white/10" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="section-padding">
        <div className="container">
          <motion.div 
            className="glass-card p-16 text-center max-w-4xl mx-auto bg-gradient-to-br from-primary-cyan/10 to-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Wherever you go, Naero helps you <span className="text-gradient">feel less lost</span>.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary px-10 py-5 text-xl">Get the App</Link>
              <Link to="/community" className="btn-secondary px-10 py-5 text-xl">Join Community</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
