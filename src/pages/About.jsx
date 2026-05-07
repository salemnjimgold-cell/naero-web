import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Compass, Globe, Users, Shield, Lightbulb, MapPin, Search, ArrowRight } from 'lucide-react';
import './About.css';

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

export default function About() {
  return (
    <div className="home-page about-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section bg-cinematic relative overflow-hidden">
        <div className="hero-particles"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-dark z-0"></div>
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto pt-20"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="badge mb-6">
              Built from real experiences. Powered by a human mission.
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Naero</span>
            </motion.h1>
            
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-medium text-white mb-8">
              "Not a stranger anymore."
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-xl text-muted leading-relaxed">
              Naero is a human-first platform created to help foreigners, travelers, students, migrants, expats, and newcomers feel informed, connected, safe, and supported in any new country.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="section-padding relative">
        <div className="container max-w-4xl mx-auto">
          <motion.div 
            className="glass-card p-10 md:p-16 text-center premium-border"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Story</h2>
            
            <div className="space-y-6 text-lg text-muted text-left leading-relaxed">
              <p>The idea for Naero was born from real life.</p>
              
              <p>After years of traveling, moving between countries, meeting foreigners, living through cultural differences, facing language barriers, loneliness, confusion, expensive mistakes, and the lack of trusted local information, one truth became clear:</p>
              
              <blockquote className="text-2xl md:text-3xl font-semibold text-primary-cyan my-10 text-center italic leading-relaxed">
                “Moving to a new country should not feel this hard. No one should feel like a stranger.”
              </blockquote>
              
              <p>Naero was created to make the first days, weeks, and months in a new country easier, safer, and more human.</p>
              
              <p>It is not just an app for places. It is a companion for people who are trying to understand a new life.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. FOUNDER SECTION */}
      <section className="section-padding bg-cinematic border-y border-white/5">
        <div className="container max-w-4xl mx-auto">
          <motion.div 
            className="founder-card glass-card relative overflow-hidden p-10 md:p-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-cyan opacity-10 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
              <div className="w-32 h-32 rounded-full bg-gradient-robotic p-[3px] flex-shrink-0 mx-auto md:mx-0 shadow-lg shadow-primary-cyan/20">
                <div className="w-full h-full rounded-full bg-bg-dark flex items-center justify-center font-bold text-4xl text-primary-cyan">
                  SN
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="badge mb-4">The Founder</div>
                <h3 className="text-3xl font-bold text-white mb-2">Salem Njim</h3>
                <p className="text-primary-cyan font-medium mb-6">Founder of Naero</p>
                
                <div className="space-y-4 text-muted text-lg leading-relaxed mb-8">
                  <p>Salem Njim created Naero after experiencing and observing the real struggles people face when they move, travel, study, work, or start again in a new country.</p>
                  
                  <p>From daily questions like where to go, whom to trust, how to save money, where to find opportunities, and how to feel less alone, the idea became clear: people need more than maps and travel guides.</p>
                  
                  <p>They need a human-first platform that helps them feel local, connected, and confident. Naero is Salem's answer to that problem.</p>
                </div>
                
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 italic text-white text-lg">
                  "I wanted to build the app I wish I had every time I arrived somewhere new."
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. FIRST BELIEVER / OFFICIAL SUPPORTER */}
      <section className="section-padding relative">
        <div className="container max-w-4xl mx-auto">
          <motion.div 
            className="glass-card relative overflow-hidden p-10 md:p-16 premium-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary-cyan/5 to-transparent z-0"></div>
            
            <div className="relative z-10 text-center">
              <Heart className="mx-auto text-primary-cyan mb-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" size={48} strokeWidth={1.5} />
              <div className="badge mb-4 border-primary-cyan/30 bg-primary-cyan/10">The First Believer</div>
              <h3 className="text-3xl font-bold text-white mb-2">Melinda Cseke</h3>
              <p className="text-muted text-lg mb-10">The first person who believed in Naero and encouraged its success</p>
              
              <div className="space-y-6 text-muted text-lg leading-relaxed max-w-3xl mx-auto text-left md:text-center">
                <p>Before Naero became a website, an app, or a real project, it was an idea carried with hope.</p>
                
                <p>Melinda Cseke was the first person who truly believed in the vision. She listened, encouraged, supported, and gave Salem the emotional strength to continue building Naero seriously.</p>
                
                <p>Her belief became one of the first real motivations behind the project. Naero carries that encouragement in its story because behind every meaningful mission, there is someone who believes before the world does.</p>
                
                <p className="text-white font-medium text-xl mt-8 italic">
                  Thank you, Melinda Cseke, for being the first official believer in Naero.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. MISSION & VISION */}
      <section className="section-padding bg-cinematic border-y border-white/5">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="glass-card p-10 group hover-glow relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-cyan opacity-5 rounded-full blur-2xl transition-opacity group-hover:opacity-20"></div>
              <Compass className="text-primary-cyan mb-6 relative z-10" size={40} strokeWidth={1.5} />
              <h4 className="text-2xl font-bold mb-4 text-white relative z-10">Our Mission</h4>
              <p className="text-muted text-lg leading-relaxed relative z-10">
                To help every person feel local, supported, and confident anywhere in the world.
              </p>
            </motion.div>

            <motion.div 
              className="glass-card p-10 group hover-glow relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} delay={0.2}
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-green opacity-5 rounded-full blur-2xl transition-opacity group-hover:opacity-20"></div>
              <Globe className="text-primary-green mb-6 relative z-10" size={40} strokeWidth={1.5} />
              <h4 className="text-2xl font-bold mb-4 text-white relative z-10">Our Vision</h4>
              <p className="text-muted text-lg leading-relaxed relative z-10">
                To become the world's most trusted digital companion for foreigners, travelers, students, migrants, expats, and newcomers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. WHY NAERO EXISTS */}
      <section className="section-padding relative">
        <div className="container max-w-5xl mx-auto">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why Naero Exists</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              When someone arrives in a new country, the hardest part is not only finding places. It is understanding life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <p className="text-white text-lg font-medium mb-6">Naero exists to help people answer questions like:</p>
              
              {[
                "Where can I go safely?",
                "What areas are affordable?",
                "How can I meet people?",
                "Where can I find opportunities?",
                "What should I avoid?",
                "How do locals actually live?",
                "Who can I trust?"
              ].map((question, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-center gap-3 glass-card p-4 hover:border-primary-cyan/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                  <span className="text-muted font-medium">{question}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="glass-card p-10 premium-border relative overflow-hidden" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/10 to-transparent z-0"></div>
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">The Ultimate Solution</h3>
              <p className="text-muted text-lg leading-relaxed relative z-10">
                Naero brings local discovery, AI guidance, real reviews, community support, safety insights, and opportunities into one simple platform.
              </p>
              <div className="mt-8 relative z-10">
                <Link to="/features" className="btn-primary w-full text-center">Explore All Features</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. VALUES SECTION */}
      <section className="section-padding bg-cinematic border-y border-white/5">
        <div className="container">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Values</h2>
            <p className="text-xl text-muted">The core principles guiding the Naero platform.</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {/* Value 1 */}
            <motion.div variants={fadeUp} className="glass-card p-8 group hover:border-primary-cyan/30 transition-all">
              <Users className="text-primary-cyan mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-3">Human First</h4>
              <p className="text-muted">Naero is designed around real people, real emotions, and real daily struggles.</p>
            </motion.div>
            
            {/* Value 2 */}
            <motion.div variants={fadeUp} className="glass-card p-8 group hover:border-primary-cyan/30 transition-all">
              <Shield className="text-primary-cyan mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-3">Trust</h4>
              <p className="text-muted">Naero focuses on real experiences, honest reviews, and useful local insights.</p>
            </motion.div>
            
            {/* Value 3 */}
            <motion.div variants={fadeUp} className="glass-card p-8 group hover:border-primary-cyan/30 transition-all">
              <Heart className="text-primary-cyan mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-3">Belonging</h4>
              <p className="text-muted">The goal is to help every newcomer feel connected, not isolated.</p>
            </motion.div>
            
            {/* Value 4 */}
            <motion.div variants={fadeUp} className="glass-card p-8 group hover:border-primary-cyan/30 transition-all">
              <Lightbulb className="text-primary-cyan mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-3">Simplicity</h4>
              <p className="text-muted">The app must be easy to use even when someone feels stressed, tired, or lost.</p>
            </motion.div>
            
            {/* Value 5 */}
            <motion.div variants={fadeUp} className="glass-card p-8 group hover:border-primary-cyan/30 transition-all md:col-span-2 lg:col-span-1">
              <Globe className="text-primary-cyan mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-3">Global Mindset</h4>
              <p className="text-muted">Naero is built for people crossing borders, cultures, and languages.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="final-cta-section section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cinematic opacity-50 z-0"></div>
        <div className="container relative z-10">
          <motion.div 
            className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto border-primary-cyan/30"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/new_mascot.png" alt="Naero Mascot" className="w-24 h-24 mx-auto mb-8 animate-float opacity-90" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              "You are not alone in a new country."
            </h2>
            
            <p className="text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
              Naero was created for every person who has ever arrived somewhere new and wished someone could guide them.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/features" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">Explore Features</Link>
              <Link to="/contact" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">Join Waitlist</Link>
              <Link to="/" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto shadow-[0_0_20px_rgba(6,182,212,0.4)]">Get the App <ArrowRight size={20} /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
