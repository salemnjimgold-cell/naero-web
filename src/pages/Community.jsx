import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, MessageCircle, Share2, MapPin, Shield, 
  Mic, Calendar, AlertTriangle, Heart, Globe, 
  Search, CheckCircle2, UserPlus, HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Community.css';

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

export default function Community() {
  return (
    <div className="community-page bg-cinematic">
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
              <motion.div variants={fadeUp} className="badge mb-6 border-primary-cyan/30 bg-primary-cyan/10">
                <span className="badge-glow"></span>
                🤝 Stronger Together
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6">
                Find people who <span className="text-gradient">understand</span> your journey.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-muted leading-relaxed mb-10 max-w-2xl mx-auto">
                Naero Community connects travelers, newcomers, locals, students, expats, and migrants through real experiences, useful advice, and human support.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary px-8 py-4 text-lg">
                  Join the community
                </button>
                <button className="btn-secondary px-8 py-4 text-lg">
                  Share your experience
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. COMMUNITY PURPOSE */}
      <section className="section-padding relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">More than just an app. A <span className="text-gradient">network</span>.</h2>
              <p className="text-xl text-muted leading-relaxed mb-8">
                Naero is not only about finding places; it is a human support network. We believe that no matter where you are from, you deserve to feel safe and welcomed.
              </p>
              <div className="flex items-center gap-4 p-6 glass-card border-primary-cyan/20">
                <Users className="text-primary-cyan" size={32} />
                <div className="text-white font-medium text-lg">50,000+ members worldwide helping each other daily.</div>
              </div>
            </motion.div>
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-6 aspect-square flex flex-col justify-center items-center text-center">
                <Heart className="text-red-400 mb-4" size={32} />
                <div className="text-white font-bold text-2xl">100%</div>
                <div className="text-muted text-sm">Human Support</div>
              </div>
              <div className="glass-card p-6 aspect-square flex flex-col justify-center items-center text-center mt-8">
                <Globe className="text-primary-cyan mb-4" size={32} />
                <div className="text-white font-bold text-2xl">40+</div>
                <div className="text-muted text-sm">Countries</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. COMMUNITY FEATURE CARDS */}
      <section className="section-padding bg-white/5 border-y border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect & <span className="text-gradient">Contribute</span></h2>
            <p className="text-muted text-lg">Active tools to help you engage with your new city.</p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: HelpCircle, title: "Ask locals", desc: "Get real answers from people who know the streets best." },
              { icon: Share2, title: "Share experiences", desc: "Write or record your journey to help future travelers." },
              { icon: MapPin, title: "City groups", desc: "Join localized discussions for specific districts and cities." },
              { icon: UserPlus, title: "Traveler groups", desc: "Meet people who are visiting at the same time as you." },
              { icon: Heart, title: "Newcomer support", desc: "Special channels for students, migrants, and expats." },
              { icon: Mic, title: "Audio/video reviews", desc: "Experience the vibe before you go with real recordings." },
              { icon: Calendar, title: "Events & meetups", desc: "Find safe, community-vetted gatherings near you." },
              { icon: AlertTriangle, title: "Safety warnings", desc: "Crowdsourced alerts to keep you out of trouble." }
            ].map((card, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-card p-8 group hover-glow transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary-cyan/10 flex items-center justify-center mb-6 group-hover:bg-primary-cyan/20">
                  <card.icon className="text-primary-cyan" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. COMMUNITY VALUES */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our <span className="text-gradient">Values</span></h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Respect", color: "bg-blue-500" },
              { title: "Trust", color: "bg-primary-cyan" },
              { title: "Experience", color: "bg-primary-green" },
              { title: "No Judgment", color: "bg-purple-500" },
              { title: "Multilingual", color: "bg-orange-500" },
              { title: "Safe Space", color: "bg-red-500" }
            ].map((val, i) => (
              <motion.div 
                key={i} 
                className="glass-card p-6 text-center hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-2 h-2 rounded-full ${val.color} mx-auto mb-4`}></div>
                <div className="text-white font-medium text-sm">{val.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXAMPLE COMMUNITY POSTS */}
      <section className="section-padding bg-cinematic/50 border-y border-white/5">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Live <span className="text-gradient">Discussions</span></h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { author: "Salem", query: "Where can I eat cheap near the city center?", category: "Food & Budget" },
              { author: "Melinda", query: "Is this neighborhood safe at night?", category: "Safety" },
              { author: "Alex", query: "I just arrived, where can I buy a SIM card?", category: "Getting Started" },
              { author: "Maria", query: "Who wants to visit a historical place this weekend?", category: "Social" }
            ].map((post, i) => (
              <motion.div 
                key={i} 
                className="glass-card p-8 flex gap-6 items-start hover:border-primary-cyan/30 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-robotic flex items-center justify-center font-bold text-white flex-shrink-0">
                  {post.author[0]}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-white font-bold">{post.author}</span>
                    <span className="text-xs glass-tag">{post.category}</span>
                  </div>
                  <p className="text-muted text-lg leading-relaxed">“{post.query}”</p>
                  <div className="flex items-center gap-4 mt-4 text-xs text-muted">
                    <span className="flex items-center gap-1"><MessageCircle size={14} /> 12 Replies</span>
                    <span className="flex items-center gap-1"><Heart size={14} /> 24 Likes</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="section-padding">
        <div className="container">
          <motion.div 
            className="glass-card p-16 text-center max-w-4xl mx-auto border-primary-cyan/30 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary-cyan opacity-5 rounded-full blur-3xl"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white relative z-10">You may arrive alone, but with Naero <span className="text-gradient">you don’t stay alone</span>.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button className="btn-primary px-10 py-5 text-xl">Join the Community</button>
              <Link to="/contact" className="btn-secondary px-10 py-5 text-xl">Contact Support</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
