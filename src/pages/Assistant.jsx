import React from 'react';
import { MessageSquare, Sparkles, Map, HeartHandshake } from 'lucide-react';
import AppMockup from '../components/AppMockup';
import './Assistant.css';

export default function Assistant() {
  return (
    <div className="page-container assistant-page animate-fade-in">
      <div className="container">
        
        <div className="assistant-hero">
          <div className="assistant-content">
            <div className="badge mb-4">✨ Powered by Naero AI</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your 24/7 intelligent <br />
              <span className="text-gradient">Local Companion</span>
            </h1>
            <p className="text-muted text-lg mb-8 max-w-2xl">
              Meet Naero AI, the sentient heart of our platform. It understands your context, speaks your language, and finds the most relevant local knowledge to keep you safe and integrated.
            </p>
            <button className="btn-primary">Try Naero AI Now</button>
          </div>
          <div className="assistant-visual animate-float delay-200">
            <AppMockup>
              <div className="chat-mockup">
                <div className="chat-header">
                  <img src="/new_mascot.png" alt="AI" className="chat-avatar" />
                  <div>
                    <h4 className="font-bold text-sm">Naero AI</h4>
                    <p className="text-xs text-primary">Online</p>
                  </div>
                </div>
                <div className="chat-body">
                  <div className="message bot">
                    Hello! I'm Naero. How can I help you settle in today?
                  </div>
                  <div className="message user delay-300 animate-fade-in">
                    I need to find a doctor who speaks Spanish near downtown.
                  </div>
                  <div className="message bot delay-500 animate-fade-in">
                    I found 3 highly-rated Spanish-speaking clinics within 2 miles. Dr. Martinez at City Health is the closest. Would you like directions?
                  </div>
                </div>
              </div>
            </AppMockup>
          </div>
        </div>

        <div className="assistant-features mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8">
              <Sparkles className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Contextual Intelligence</h3>
              <p className="text-muted">Understands not just what you ask, but why you're asking it based on your profile.</p>
            </div>
            <div className="glass-card p-8">
              <Map className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Hyper-Local Data</h3>
              <p className="text-muted">Searches through real community reviews and official databases in real-time.</p>
            </div>
            <div className="glass-card p-8">
              <HeartHandshake className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Empathetic Responses</h3>
              <p className="text-muted">Designed to be supportive, reassuring, and helpful during stressful situations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
