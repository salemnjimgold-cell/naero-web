import React from 'react';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="page-container contact-page animate-fade-in">
      <div className="container">
        <div className="contact-header text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Whether you have a question, want to partner with us, or are an investor looking to join our journey, we'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info glass-card">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="info-item">
              <div className="info-icon"><Mail size={24} /></div>
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-muted">hello@naero.app</p>
                <p className="text-muted">investors@naero.app</p>
              </div>
            </div>

            <div className="info-item mt-6">
              <div className="info-icon"><MessageSquare size={24} /></div>
              <div>
                <h4 className="font-semibold">Support</h4>
                <p className="text-muted">Available 24/7 via Naero AI Assistant</p>
              </div>
            </div>

            <div className="info-item mt-6">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h4 className="font-semibold">Headquarters</h4>
                <p className="text-muted">Global - We are everywhere you are.</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass-card">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" required>
                  <option value="">Select a topic</option>
                  <option value="support">General Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="investor">Investor Relations</option>
                  <option value="feedback">Product Feedback</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
