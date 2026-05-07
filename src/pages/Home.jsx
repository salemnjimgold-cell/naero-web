import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, Shield, Heart, Briefcase, Globe, MessageSquare, 
  ArrowRight, Compass, Users, Star, Smartphone, Coffee,
  Train, Play, ChevronRight, CheckCircle2
} from 'lucide-react';
import './Home.css';

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

export default function Home() {
  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section bg-cinematic">
        <div className="hero-particles"></div>
        <div className="container">
          <div className="hero-grid">
            <motion.div 
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="badge">
                <span className="badge-glow"></span>
                🌟 The world’s trusted digital companion
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="hero-title">
                Not a <span className="text-gradient">stranger</span> anymore.
              </motion.h1>
              
              <motion.p variants={fadeUp} className="hero-desc">
                Naero helps foreigners, travelers, students, migrants, and newcomers feel safe, informed, connected, and confident in any country.
              </motion.p>
              
              <motion.div variants={fadeUp} className="hero-actions">
                <Link to="#features" className="btn-primary">Explore Features</Link>
                <Link to="/contact" className="btn-secondary">Join Waitlist</Link>
              </motion.div>
              
              <motion.div variants={fadeUp} className="trust-indicator">
                <p className="text-sm text-muted mb-2">Coming soon to</p>
                <div className="flex items-center gap-4 text-muted">
                  <span className="font-semibold text-white"> App Store</span>
                  <span>&bull;</span>
                  <span className="font-semibold text-white">Google Play</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="presentation-glow"></div>
              <img src="/app_presentation.png" alt="Naero UI Overview" className="presentation-image" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="about-section section-padding">
        <div className="container">
          <motion.div 
            className="about-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="about-text">
              <h2 className="section-title mb-6">Who We Are</h2>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                Naero is a human-first platform created to help people adapt faster and live better in new countries.
              </p>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                The idea was born from real experiences of traveling, moving between countries, language barriers, loneliness, confusion, expensive mistakes, and a lack of trusted information.
              </p>
              <div className="emotional-tags">
                <span className="glass-tag">Feel Safe</span>
                <span className="glass-tag">Stay Connected</span>
                <span className="glass-tag">Be Informed</span>
                <span className="glass-tag">Felt Understood</span>
                <span className="glass-tag">Never Alone</span>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="about-visual">
              <div className="glass-card premium-card p-8 text-center relative overflow-hidden">
                <div className="abstract-shape shape-1"></div>
                <div className="abstract-shape shape-2"></div>
                <Heart size={48} className="text-primary mb-6 mx-auto relative z-10" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">Human Connectivity</h3>
                <p className="text-muted relative z-10">We believe technology should bring people closer together, breaking down borders and cultural barriers.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. FOUNDER STORY & 4. MISSION VISION */}
      <section className="founder-mission-section section-padding bg-cinematic border-y border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Founder Story */}
            <motion.div 
              className="founder-card glass-card relative overflow-hidden p-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-cyan opacity-10 rounded-full blur-3xl"></div>
              
              <div className="badge mb-6">The Origin</div>
              <h3 className="text-3xl font-bold mb-6">A story built from real struggle.</h3>
              <p className="text-muted text-lg mb-10 leading-relaxed relative z-10">
                Created after years of traveling and living across multiple countries, deeply understanding the daily struggles foreigners face when trying to adapt to a new place.
              </p>
              
              <div className="founder-profile flex items-center gap-4 mt-auto pt-6 border-t border-white/5 relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-robotic p-[2px] flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-bg-dark flex items-center justify-center font-bold text-xl text-primary-cyan">
                    SN
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Salem Njim</h4>
                  <p className="text-primary-cyan text-sm font-medium">Founder & CEO</p>
                </div>
              </div>
            </motion.div>

            {/* Mission & Vision */}
            <motion.div 
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-card mission-card group hover-glow relative overflow-hidden p-8 flex-1">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-cyan opacity-5 rounded-full blur-2xl transition-opacity group-hover:opacity-20"></div>
                <Compass className="text-primary-cyan mb-5 relative z-10" size={36} strokeWidth={1.5} />
                <h4 className="text-2xl font-bold mb-3 text-white relative z-10">Our Mission</h4>
                <p className="text-muted text-lg leading-relaxed relative z-10">To help every person feel local anywhere in the world, eliminating borders of communication.</p>
              </div>
              <div className="glass-card mission-card group hover-glow relative overflow-hidden p-8 flex-1">
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary-green opacity-5 rounded-full blur-2xl transition-opacity group-hover:opacity-20"></div>
                <Globe className="text-primary-green mb-5 relative z-10" size={36} strokeWidth={1.5} />
                <h4 className="text-2xl font-bold mb-3 text-white relative z-10">Our Vision</h4>
                <p className="text-muted text-lg leading-relaxed relative z-10">To become the world's most trusted digital companion for foreigners and newcomers globally.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. FEATURES SHOWCASE */}
      <section id="features" className="features-section section-padding">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-20"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="section-title mb-6">Everything you need to <span className="text-gradient">thrive</span></h2>
            <p className="text-xl text-muted">A fully integrated ecosystem designed to solve real-world problems for newcomers.</p>
          </motion.div>

          <div className="features-showcase-grid">
            {/* Feature 1 */}
            <motion.div className="feature-showcase-card glass-card p-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="feature-header flex items-center gap-4 mb-6">
                <div className="icon-box"><Coffee size={24} /></div>
                <h3 className="text-2xl font-bold">Discover Affordable Places</h3>
              </div>
              <p className="text-muted mb-6">Find restaurants, cafés, transportation, coworking spaces, and hidden local gems that fit your budget.</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={16} className="text-primary" /> Neighborhood insights</li>
                <li><CheckCircle2 size={16} className="text-primary" /> Transportation links</li>
                <li><CheckCircle2 size={16} className="text-primary" /> Local pricing</li>
              </ul>
            </motion.div>

            {/* Feature 2 */}
            <motion.div className="feature-showcase-card glass-card p-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="feature-header flex items-center gap-4 mb-6">
                <div className="icon-box"><Star size={24} /></div>
                <h3 className="text-2xl font-bold">Real Human Reviews</h3>
              </div>
              <p className="text-muted mb-6">Authentic experiences shared by users through text, voice, and video. Get warnings and trusted recommendations.</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={16} className="text-primary" /> Voice & Video reviews</li>
                <li><CheckCircle2 size={16} className="text-primary" /> Scam warnings</li>
                <li><CheckCircle2 size={16} className="text-primary" /> Verified locals</li>
              </ul>
            </motion.div>

            {/* Feature 3 */}
            <motion.div className="feature-showcase-card glass-card p-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="feature-header flex items-center gap-4 mb-6">
                <div className="icon-box"><Users size={24} /></div>
                <h3 className="text-2xl font-bold">Community Support</h3>
              </div>
              <p className="text-muted mb-6">Connect instantly with locals, travelers, expats, students, and other newcomers who understand your journey.</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={16} className="text-primary" /> Private messaging</li>
                <li><CheckCircle2 size={16} className="text-primary" /> Interest groups</li>
                <li><CheckCircle2 size={16} className="text-primary" /> Local meetups</li>
              </ul>
            </motion.div>

            {/* Feature 4 */}
            <motion.div className="feature-showcase-card glass-card p-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="feature-header flex items-center gap-4 mb-6">
                <div className="icon-box"><MessageSquare size={24} /></div>
                <h3 className="text-2xl font-bold">Naero AI Assistant</h3>
              </div>
              <p className="text-muted mb-6">Your 24/7 intelligent companion. Compare cities, estimate living costs, and navigate daily life seamlessly.</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={16} className="text-primary" /> Avoid local scams</li>
                <li><CheckCircle2 size={16} className="text-primary" /> Instant translations</li>
                <li><CheckCircle2 size={16} className="text-primary" /> Cost estimations</li>
              </ul>
            </motion.div>

            {/* Feature 5 */}
            <motion.div className="feature-showcase-card glass-card p-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="feature-header flex items-center gap-4 mb-6">
                <div className="icon-box"><Briefcase size={24} /></div>
                <h3 className="text-2xl font-bold">Jobs & Opportunities</h3>
              </div>
              <p className="text-muted mb-6">Find temporary work, beginner-friendly jobs, and opportunities specifically tailored for newcomers.</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={16} className="text-primary" /> No rigid residency proof</li>
                <li><CheckCircle2 size={16} className="text-primary" /> Local gigs</li>
                <li><CheckCircle2 size={16} className="text-primary" /> Fast applications</li>
              </ul>
            </motion.div>

            {/* Feature 6 */}
            <motion.div className="feature-showcase-card glass-card p-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="feature-header flex items-center gap-4 mb-6">
                <div className="icon-box"><Shield size={24} /></div>
                <h3 className="text-2xl font-bold">Safety & Guidance</h3>
              </div>
              <p className="text-muted mb-6">Receive live safety alerts, deep cultural advice, and guidance to stay in trusted and secure areas.</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={16} className="text-primary" /> Live safety alerts</li>
                <li><CheckCircle2 size={16} className="text-primary" /> Cultural etiquette</li>
                <li><CheckCircle2 size={16} className="text-primary" /> Safe zones map</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. WHY NAERO IS DIFFERENT */}
      <section className="difference-section section-padding bg-cinematic">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Most apps help you travel.<br/><span className="text-gradient">Naero helps you live.</span></h2>
          </motion.div>
          
          <div className="difference-grid">
            <motion.div className="glass-card p-10 comparison-card" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="text-xl mb-8 text-center text-muted border-b border-white/5 pb-4">Other Platforms</div>
              <ul className="text-muted space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 text-red-400 text-xs font-bold border border-red-500/20">✕</div>
                  <span>Scattered information across 10 apps</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 text-red-400 text-xs font-bold border border-red-500/20">✕</div>
                  <span>Fake or sponsored reviews</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 text-red-400 text-xs font-bold border border-red-500/20">✕</div>
                  <span>Only built for tourists</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 text-red-400 text-xs font-bold border border-red-500/20">✕</div>
                  <span>Strict document requirements</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div className="glass-card p-10 comparison-card premium-border relative overflow-hidden" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/10 to-primary-green/5 z-0"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="text-xl mb-8 text-center text-primary-cyan border-b border-primary-cyan/20 pb-4 font-semibold flex items-center justify-center gap-2">
                  <Star size={18} /> The Naero Ecosystem
                </div>
                <div className="text-3xl font-bold mb-8 text-center text-white">All-in-One Companion</div>
                <div className="flex flex-wrap justify-center gap-3 mt-auto">
                  <span className="premium-tag">AI Assistant</span>
                  <span className="premium-tag">Local Discovery</span>
                  <span className="premium-tag">Jobs</span>
                  <span className="premium-tag">Human Reviews</span>
                  <span className="premium-tag">Maps</span>
                  <span className="premium-tag">Community</span>
                  <span className="premium-tag">Safety Alerts</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. TARGET USERS */}
      <section className="users-section section-padding">
        <div className="container">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title">Built for you.</h2>
            <p className="text-xl text-muted">A platform designed for global mobility.</p>
          </motion.div>
          
          <motion.div className="users-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
            {['Travelers', 'Students', 'Expats', 'Migrants', 'Digital Nomads', 'Newcomers'].map((user, idx) => (
              <motion.div key={user} variants={fadeUp} className="user-card glass-card">
                <h4 className="text-xl font-bold mb-2">{user}</h4>
                <div className="w-10 h-1 bg-gradient-robotic rounded-full"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. FUTURE FEATURES */}
      <section className="future-section section-padding bg-cinematic border-y border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="section-title mb-6">The Future of <span className="text-gradient">Naero</span></h2>
              <p className="text-lg text-muted mb-8">We are constantly evolving to make global integration absolutely seamless. Coming soon to the platform:</p>
              
              <ul className="timeline-list">
                <li><div className="timeline-dot"></div> AI voice companion & instant translation</li>
                <li><div className="timeline-dot"></div> Smart relocation planning algorithms</li>
                <li><div className="timeline-dot"></div> Offline city packs & live local alerts</li>
                <li><div className="timeline-dot"></div> Social matching & local marketplace</li>
              </ul>
            </motion.div>
            
            <motion.div className="glass-card p-1 relative overflow-hidden h-[400px]" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/20 to-primary-blue/5 z-0"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10 flex-col">
                <img src="/new_mascot.png" alt="Naero AI" className="w-32 animate-float opacity-80 mb-6" />
                <div className="glass-tag text-xl px-6 py-3">Updating Neural Pathways...</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. TRUST SECTION */}
      <section className="trust-section section-padding">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title mb-16">Why Users <span className="text-gradient">Trust Naero</span></h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div className="trust-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Heart className="mx-auto text-primary mb-4" size={32} />
              <h4 className="font-bold text-xl mb-2">Human-First Design</h4>
              <p className="text-muted">A stress-free experience built with empathy.</p>
            </motion.div>
            <motion.div className="trust-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Shield className="mx-auto text-primary mb-4" size={32} />
              <h4 className="font-bold text-xl mb-2">Real Community</h4>
              <p className="text-muted">Authentic reviews and scam-free zones.</p>
            </motion.div>
            <motion.div className="trust-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Globe className="mx-auto text-primary mb-4" size={32} />
              <h4 className="font-bold text-xl mb-2">Global Accessibility</h4>
              <p className="text-muted">Free core features, zero complicated onboarding.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="final-cta-section section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cinematic opacity-50"></div>
        <div className="container relative z-10">
          <motion.div 
            className="glass-card p-16 text-center max-w-4xl mx-auto border-primary-cyan/30"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/new_mascot.png" alt="Naero Mascot" className="w-24 h-24 mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">"You are not alone in a new country."</h2>
            <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
              Join Naero and experience the world with confidence. Your new beginning starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">Join Waitlist <ArrowRight size={20} /></Link>
              <Link to="/features" className="btn-secondary text-lg px-8 py-4">Explore Naero</Link>
            </div>
            <p className="mt-8 text-sm text-muted">Download Soon on iOS & Android</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
