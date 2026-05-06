import { Link } from 'react-router-dom';
import { Shield, MapPin, MessageSquare, Briefcase, Globe, Heart } from 'lucide-react';
import './Home.css';

export default function Home() {
  const features = [
    { icon: <MapPin size={24} />, title: "Discover Places", desc: "Find affordable, safe, and welcoming places tailored for you." },
    { icon: <Shield size={24} />, title: "Trusted Advice", desc: "Real reviews by voice, video, and text from locals and expats." },
    { icon: <Heart size={24} />, title: "Community Help", desc: "A safe and supportive community to help you integrate quickly." },
    { icon: <Briefcase size={24} />, title: "Opportunities", desc: "Find jobs and opportunities without needing residency proof." },
    { icon: <Globe size={24} />, title: "Multi-Language", desc: "Naero speaks your language, breaking down all barriers." },
    { icon: <MessageSquare size={24} />, title: "AI Assistant", desc: "Your personal 24/7 intelligent guide for any situation." }
  ];

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section bg-cinematic">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="badge animate-fade-in">🌟 The #1 App for Global Citizens</div>
              <h1 className="hero-title animate-fade-in delay-100">
                Not a <span className="text-gradient">stranger</span> anymore.
              </h1>
              <p className="hero-desc animate-fade-in delay-200">
                Naero helps foreigners, travelers, students, migrants, and newcomers feel safe, integrated, and at home in any new country. No residency proof needed.
              </p>
              <div className="hero-actions animate-fade-in delay-300">
                <Link to="/contact" className="btn-primary">Join the Waitlist</Link>
                <Link to="/how-it-works" className="btn-secondary">See How It Works</Link>
              </div>
              <div className="trust-badges animate-fade-in delay-400">
                <div className="avatars">
                  <img src="https://i.pravatar.cc/100?img=1" alt="User" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="User" />
                  <img src="https://i.pravatar.cc/100?img=3" alt="User" />
                  <div className="avatar-more">+10k</div>
                </div>
                <span>Trusted by newcomers worldwide</span>
              </div>
            </div>
            <div className="hero-visual animate-fade-in delay-500">
              <img src="/app_presentation.png" alt="Naero Platform UI" className="presentation-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section-padding">
        <div className="container">
          <div className="section-header text-center mb-12 animate-fade-in">
            <h2 className="section-title">Everything you need to <span className="text-gradient">thrive</span></h2>
            <p className="section-subtitle">A powerful platform combining the best of discovery, learning, and community support.</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className={`feature-card glass-card animate-fade-in delay-${(idx % 3 + 1) * 100}`}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Highlight */}
      <section className="hiw-section section-padding bg-cinematic">
        <div className="container">
          <div className="hiw-grid">
            <div className="hiw-visual animate-fade-in">
              <img src="/hero_bg.png" alt="Naero App" className="hiw-image glass-card" />
            </div>
            <div className="hiw-content animate-fade-in delay-200">
              <h2 className="section-title mb-6">Your personal <span className="text-gradient">AI Companion</span></h2>
              <ul className="hiw-list">
                <li>
                  <div className="hiw-step">1</div>
                  <div>
                    <h4>Ask anything</h4>
                    <p className="text-muted">Need a doctor? Looking for cheap groceries? Just ask.</p>
                  </div>
                </li>
                <li>
                  <div className="hiw-step">2</div>
                  <div>
                    <h4>Get local, verified answers</h4>
                    <p className="text-muted">Naero searches through trusted community reviews and official data.</p>
                  </div>
                </li>
                <li>
                  <div className="hiw-step">3</div>
                  <div>
                    <h4>Connect instantly</h4>
                    <p className="text-muted">Reach out to locals or expats who have been in your shoes.</p>
                  </div>
                </li>
              </ul>
              <Link to="/assistant" className="btn-primary mt-8">Explore Naero AI</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container">
          <div className="cta-card glass-card text-center animate-fade-in">
            <img src="/logo.svg" alt="Naero Logo" className="cta-logo mb-6" />
            <h2 className="section-title mb-4">Ready to start your journey?</h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
              Join thousands of global citizens who are already using Naero to discover, connect, and thrive in their new homes.
            </p>
            <form className="waitlist-form">
              <input type="email" placeholder="Enter your email" required className="email-input" />
              <button type="submit" className="btn-primary">Join Waitlist</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
